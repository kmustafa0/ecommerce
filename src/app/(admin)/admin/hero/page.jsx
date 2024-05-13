import React from 'react';
import styles from './index.module.scss';
import Dropzone from '@/components/Dropzone/Dropzone';
import CurrentImages from '@/components/CurrentImages/CurrentImages';
const HeroImages = () => {
  return (
    <>
      <h1 className={styles.heading}>Manage Hero Slider Images</h1>
      <section className={styles.section}>
        <CurrentImages />
      </section>
      <section className={styles.section}>
        <Dropzone />
      </section>
    </>
  );
};

export default HeroImages;
