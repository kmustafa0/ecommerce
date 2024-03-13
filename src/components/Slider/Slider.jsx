'use client';
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './slider.css';
import { HERO_CAROUSEL_IMAGES } from '@/lib/contstants';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { NextButton, PrevButton, usePrevNextButtons } from './ArrowButtons';
import { DotButton, useDotButton } from './DotButtons';
import Link from 'next/link';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2500 }),
    WheelGesturesPlugin(),
  ]);

  const [scrollProgress, setScrollProgress] = useState(0);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const onScroll = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi.on('reInit', onScroll);
    emblaApi.on('scroll', onScroll);
  }, [emblaApi, onScroll]);

  return (
    <section className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {HERO_CAROUSEL_IMAGES.map((image) => (
            <div key={image.path} className='embla__slide'>
              <Link href={image.link} aria-label={image.alt}>
                <Image src={image.path} alt={image.alt} fill priority />
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
    </section>
  );
}
