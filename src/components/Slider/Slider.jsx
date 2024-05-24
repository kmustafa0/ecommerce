'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { NextButton, PrevButton, usePrevNextButtons } from './ArrowButtons';
import { DotButton, useDotButton } from './DotButtons';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import './slider.scss';
import SliderContent from './SliderContent';
import { useFetchImages } from '@/hooks';

const useEmblaCarouselSetup = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2500 }),
    WheelGesturesPlugin(),
  ]);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return {
    emblaRef,
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

export function EmblaCarousel() {
  const { data: images = [] } = useFetchImages();
  const {
    emblaRef,
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  } = useEmblaCarouselSetup();

  return (
    <section className='embla'>
      <div className='wrapper'>
        <div className='container'>
          <div className='embla__viewport' ref={emblaRef}>
            <div className='embla__container'>
              <SliderContent images={images} />
            </div>
            <Controls
              prevBtnDisabled={prevBtnDisabled}
              nextBtnDisabled={nextBtnDisabled}
              onPrevButtonClick={onPrevButtonClick}
              onNextButtonClick={onNextButtonClick}
              scrollSnaps={scrollSnaps}
              selectedIndex={selectedIndex}
              onDotButtonClick={onDotButtonClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const Controls = ({
  prevBtnDisabled,
  nextBtnDisabled,
  onPrevButtonClick,
  onNextButtonClick,
  scrollSnaps,
  selectedIndex,
  onDotButtonClick,
}) => (
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
          className={`embla__dot${index === selectedIndex ? ' embla__dot--selected' : ''}`}
        />
      ))}
    </div>
  </div>
);
