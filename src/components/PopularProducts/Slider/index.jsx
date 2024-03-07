'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { NextButton, PrevButton, usePrevNextButtons } from '@/components/Slider/ArrowButtons';
import { DotButton, useDotButton } from '@/components/Slider/DotButtons';

const PopularProductsSlider = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <section className='popular-products'>
      <div className='popular-products__viewport' ref={emblaRef}>
        <div className='popular-products__container'>
          {slides.map((index) => (
            <div className='popular-products__slide' key={index}>
              <div className='popular-products__slide__number'>{index + 1}</div>
            </div>
          ))}
        </div>
        <div className='popular-products__controls'>
          <div className='popular-products__buttons'>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>

          <div className='popular-products__dots'>
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
};

export default PopularProductsSlider;
