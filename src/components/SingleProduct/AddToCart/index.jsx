import React from 'react';
import styles from './index.module.scss';
const AddToCart = () => {
  return (
    <>
      <button className={styles.addToCartButton}>Add to cart</button>
      <button className={styles.addToCartButton}>Buy Now </button>
    </>
  );
};

export default AddToCart;
