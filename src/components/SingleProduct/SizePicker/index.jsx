'use client';
import React, { useState } from 'react';
import styles from './index.module.scss';

const SizePicker = ({ productSizes, selectedColor, productColors }) => {
  const filteredSizes =
    productColors.length > 0 && selectedColor
      ? productColors.find((color) => color.name.toLowerCase() === selectedColor.toLowerCase())
          ?.sizes
      : productSizes;

  const [selectedSize, setSelectedSize] = useState(
    productSizes.find((size) => size.inStock)?.name || ''
  );
  const sortedSizes = filteredSizes
    ? filteredSizes.sort((a, b) => a.name.localeCompare(b.name))
    : productSizes.sort((a, b) => a.name.localeCompare(b.name));

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  return (
    <div>
      <h2>Sizes</h2>
      <div className={styles.sizeContainer}>
        {sortedSizes.length > 0 ? (
          sortedSizes.map((size) => (
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
