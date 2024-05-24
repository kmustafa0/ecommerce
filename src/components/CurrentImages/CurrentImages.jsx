'use client';
import React, { useState, useEffect } from 'react';
import styles from './CurrentImages.module.scss';
import CurrentImagesList from './CurrentImagesList';
import { useDeleteImage, useFetchImages } from '@/hooks';

const CurrentImages = () => {
  const { mutate: deleteImage } = useDeleteImage();
  const { data: images = [] } = useFetchImages();

  return (
    <>
      <h3>Current Images</h3>
      <ul className={styles.currentImagesList}>
        {images.map((image) => (
          <CurrentImagesList key={image.id} image={image} deleteImage={deleteImage} />
        ))}
      </ul>
    </>
  );
};

export default CurrentImages;
