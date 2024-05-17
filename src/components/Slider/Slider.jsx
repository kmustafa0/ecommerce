'use client';
import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { NextButton, PrevButton, usePrevNextButtons } from './ArrowButtons';
import { DotButton, useDotButton } from './DotButtons';
import Link from 'next/link';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import './slider.scss';
import { getImages } from '@/lib/actions';

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2500 }),
    WheelGesturesPlugin(),
  ]);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const { images } = await getImages();
      setImages(images);
    };

    fetchImages();
  }, []);
  return (
    <section className='embla'>
      <div className='wrapper'>
        <div className='container'>
          <div className='embla__viewport' ref={emblaRef}>
            <div className='embla__container'>
              {images.length >= 1 &&
                images.map((image) => (
                  <div key={image.id} className='embla__slide'>
                    <Link href={image.link} aria-label={image.alt}>
                      <Image src={image.src} alt={image.alt} fill priority />
                    </Link>
                  </div>
                ))}
            </div>
            <div className='embla__controls'>
              <div className='embla__buttons'>
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
              </div>

              <div className='embla__dots'>
                {scrollSnaps.map((_, index) => (
                  <DotButton
                    key={index}
                    onClick={() => onDotButtonClick(index)}
                    className={'embla__dot'.concat(
                      index === selectedIndex ? ' embla__dot--selected' : ''
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
