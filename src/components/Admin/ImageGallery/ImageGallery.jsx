import Image from 'next/image';
import React from 'react';
import styles from './ImageGallery.module.scss';

const ImageGallery = ({ colors }) => {
  return (
    <div>
      {colors.map((color) => (
        <div key={color.id} className={styles.singleColor}>
          <div className={styles.colorName}>
            <h4>{color.name}</h4>
            <div className={styles.color} style={{ backgroundColor: color.color }} />
          </div>
          <div className={styles.images}>
            {color.images.map((image) => (
              <Image
                key={image.id}
                src={image.imageSrc}
                width={250}
                height={250}
                alt={image.imageAlt}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
