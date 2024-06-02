'use client';
import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';

const ColorPicker = ({ productColors, selectedColor, onColorChange }) => {
  const [localSelectedColor, setLocalSelectedColor] = useState(
    selectedColor || productColors[0]?.name.toLowerCase()
  );

  useEffect(() => {
    if (!selectedColor && productColors.length > 0) {
      onColorChange(productColors[0]?.name.toLowerCase());
    }
  }, [productColors, selectedColor, onColorChange]);

  const handleColorClick = (color) => {
    setLocalSelectedColor(color);
    onColorChange(color);
  };

  return (
    <div>
      <h2>Colors</h2>
      <div className={styles.colorsContainer}>
        {productColors.map((color) => (
          <div
            key={color.name}
            className={`${styles.radioOption}`}
            onClick={() => handleColorClick(color.name.toLowerCase())}
            style={{
              borderColor:
                localSelectedColor === color.name.toLowerCase() ? color.color : 'transparent',
            }}>
            <span className={styles.srOnly}>{color.name}</span>
            <span className={styles.radioButton} style={{ backgroundColor: color.color }}></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
