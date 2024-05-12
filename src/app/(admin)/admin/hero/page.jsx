import React from 'react';
import styles from './index.module.scss';
import Dropzone from '@/components/Dropzone/Dropzone';
const HeroImages = () => {
  return (
    <>
      <h1 className={styles.heading}>Manage Hero Slider Images</h1>
      <div className={styles.uploadImages}>
        <Dropzone className={styles.dropzone} />
      </div>
    </>
  );
};

export default HeroImages;
