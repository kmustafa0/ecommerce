import React from 'react';
import Image from 'next/image';
import styles from './index.module.scss';
import { classNames } from '@/utils/classNames';

const ImageGallery = ({ productImages }) => {
  return (
    <div className={styles.imageContainer}>
      <h2>Images</h2>
      <div className={styles.imageGrid}>
        {productImages.length > 0 &&
          productImages.map((image) => (
            <div
              key={image.id}
              className={classNames(image.primary ? styles.imagePrimary : styles.image)}>
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
          ))}
      </div>
    </div>
  );
};

export default ImageGallery;
