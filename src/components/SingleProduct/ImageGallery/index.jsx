import React from 'react';
import styles from './index.module.scss';
import { classNames } from '@/utils/classNames';
import { PRODUCT } from '@/lib/contstants';
const ImageGallery = () => {
  return (
    <div className={styles.imageContainer}>
      <h2>Images</h2>
      <div className={styles.imageGrid}>
        {PRODUCT.images.map((image) => (
          <img
            key={image.id}
            src={image.imageSrc}
            alt={image.imageAlt}
            className={classNames(image.primary ? styles.imagePrimary : styles.image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
