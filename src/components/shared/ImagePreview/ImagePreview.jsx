import React from 'react';
import Image from 'next/image';
import styles from './ImagePreview.module.scss';

const ImagePreview = ({ src, alt, onLoad }) => {
  return (
    <div className={styles.imageWrapper}>
      <Image
        src={src}
        alt={alt}
        fill
        onLoad={onLoad}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        priority
      />
    </div>
  );
};

export default ImagePreview;
