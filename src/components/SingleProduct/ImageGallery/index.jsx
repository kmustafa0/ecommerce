import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './index.module.scss';
import { classNames } from '@/utils/classNames';
import { DotButton, useDotButton } from '@/components/Slider/DotButtons';

const ImageGallery = ({ productImages }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const imagesWithPrimary = productImages.map((image, index) => ({
    ...image,
    primary: image.primary || index === 0,
  }));

  return (
    <div className={styles.imageContainer}>
      <h2>Images</h2>
      <div className={styles.imageGrid}>
        {imagesWithPrimary.map((image) => (
          <ImageItem key={image.id} image={image} primary={image.primary} />
        ))}
      </div>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {imagesWithPrimary.map((image) => (
            <EmblaSlide key={image.id} image={image} />
          ))}
        </div>
        <div className={styles.imageGalleryDots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={classNames(
                styles.embla__dot,
                index === selectedIndex && styles['embla__dot--selected']
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ImageItem = ({ image, primary }) => (
  <div className={classNames(primary ? styles.imagePrimary : styles.image, styles.imageItem)}>
    <div className={styles.imgWrapper}>
      <Image
        src={image.imageSrc}
        alt={image.imageAlt}
        fill
        sizes='(max-width: 1024px) 100vw, 50vw'
        loading='eager'
        priority
        className={styles.img}
      />
    </div>
  </div>
);

const EmblaSlide = ({ image }) => (
  <div className={classNames(styles.embla__slide)}>
    <div className={styles.imgWrapper}>
      <Image
        src={image.imageSrc}
        alt={image.imageAlt}
        fill
        sizes='(max-width: 1024px) 100vw, 50vw'
        loading='eager'
        priority
        className={styles.img}
      />
    </div>
  </div>
);

export default ImageGallery;
