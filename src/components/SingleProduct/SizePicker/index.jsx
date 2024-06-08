import React from 'react';
import styles from './index.module.scss';

const SizePicker = ({ productSizes, selectedSize, onSizeChange }) => {
  const sortedSizes = productSizes.sort((a, b) => a.name.localeCompare(b.name));

  const handleSizeClick = (size) => {
    onSizeChange(size);
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
