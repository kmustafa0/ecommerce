import React from 'react';
import styles from './index.module.scss';
import PopularProductsSlider from './Slider';
import './Slider/slider.css';

const PopularProducts = () => {
  const SLIDE_COUNT = 6;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <PopularProductsSlider slides={SLIDES} />
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
