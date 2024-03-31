import React from 'react';
import styles from './index.module.scss';
import PopularProductsSlider from './Slider';
import './Slider/slider.scss';

const PopularProducts = () => {
  return (
    <section className={styles.popularProducts}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h2>popular products</h2>
          </div>
          <PopularProductsSlider />
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
