'use client';
import React, { useState } from 'react';
import styles from './index.module.scss';
//import { PRODUCT } from '@/lib/contstants';

const SizePicker = ({ productSizes }) => {
  const [selectedSize, setSelectedSize] = useState(
    productSizes.find((size) => size.inStock)?.name || ''
  );

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  return (
    <div>
      <h2>Sizes</h2>
      <div className={styles.sizeContainer}>
        {productSizes.length > 0 ? (
          productSizes.map((size) => (
            <button
              key={size.name}
              className={`${selectedSize === size.name ? styles.selected : ''} ${
                !size.inStock ? styles.outOfStock : ''
              }`}
              onClick={() => handleSizeClick(size.name)}
              disabled={!size.inStock}>
              {size.name}
            </button>
          ))
        ) : (
          <p className={styles.soldOut}>
            Sorry, this product is sold out. Thank you for your understanding.
          </p>
        )}
      </div>
    </div>
  );
};

export default SizePicker;
