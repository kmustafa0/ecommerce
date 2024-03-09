'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { NextButton, PrevButton, usePrevNextButtons } from '@/components/Slider/ArrowButtons';
import { DotButton, useDotButton } from '@/components/Slider/DotButtons';
import { PRODUCT_CAROUSEL_IMAGES } from '@/lib/contstants';
import ProductCard from '../Card';
import './slider.css';

const PopularProductsSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <div className={'popularProducts'}>
      <div className={'popularProductsViewport'} ref={emblaRef}>
        <div className={'popularProductsContainer'}>
          {PRODUCT_CAROUSEL_IMAGES.map((item, index) => (
            <div className={'popularProductsSlide'} key={index}>
              <ProductCard
                title={item.title}
                link={item.link}
                alt={item.alt}
                img={item.path}
                price={item.price}
                discountedPrice={item.discountedPrice}
              />
            </div>
          ))}
        </div>
        <div className={'popularProductsControls'}>
          <div className={'popularProductsButtons'}>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>

          <div className={'popularProductsDots'}>
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
  );
};

export default PopularProductsSlider;
