import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';

const ProductCard = ({ title, img, price, discountedPrice }) => {
  return (
    <div className={styles.productCardWrapper}>
      {img && (
        <div className={styles.imageWrapper}>
          <Image src={img} alt={`product ${img}`} fill />
        </div>
      )}
      <div className={styles.textWrapper}>
        <h4 className={styles.title}>{title}</h4>
        <span className={styles.price}>${price}</span>
        {discountedPrice && <span className={styles.discountedPrice}>${discountedPrice}</span>}
      </div>
    </div>
  );
};

export default ProductCard;
