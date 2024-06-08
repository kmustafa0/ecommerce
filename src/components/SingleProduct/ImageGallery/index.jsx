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
              <Image
                src={image.imageSrc}
                alt={image.imageAlt}
                layout='responsive'
                loading='eager'
                width={500}
                height={500}
                className={styles.img}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageGallery;
