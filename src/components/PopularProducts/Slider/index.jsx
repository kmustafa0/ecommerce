'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { NextButton, PrevButton, usePrevNextButtons } from '@/components/Slider/ArrowButtons';
import { DotButton, useDotButton } from '@/components/Slider/DotButtons';
import ProductCard from '../Card';
import './slider.scss';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { useFetchProducts } from '@/hooks';

const PopularProductsSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true }, [
    WheelGesturesPlugin(),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const { data: products, isLoading, error } = useFetchProducts();
  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Error: {error}</h3>;
  return (
    <div className={'popularProducts'}>
      <div className={'popularProductsViewport'} ref={emblaRef}>
        <div className={'popularProductsContainer'}>
          {products &&
            products.map((product, index) => (
              <div className={'popularProductsSlide'} key={index}>
                <ProductCard
                  title={product.name}
                  link={product.slug}
                  alt={product.name}
                  img={product.images[0].imageSrc}
                  price={product.price}
                  discountedPrice={product.discountedPrice}
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
