'use client';
import React, { useState } from 'react';
import styles from './index.module.scss';
import { PRODUCT } from '@/lib/contstants';

const SizePicker = () => {
  const [selectedSize, setSelectedSize] = useState(
    PRODUCT.sizes.find((size) => size.inStock)?.name || ''
  );

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div>
      <h2>Sizes</h2>
      <div className={styles.sizeContainer}>
        {PRODUCT.sizes.map((size) => (
          <button
            key={size.name}
            className={`${selectedSize === size.name ? styles.selected : ''} ${
              !size.inStock ? styles.outOfStock : ''
            }`}
            onClick={() => handleSizeClick(size.name)}
            disabled={!size.inStock}>
            {size.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizePicker;
