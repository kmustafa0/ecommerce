'use client';
import { PRODUCT } from '@/lib/contstants';
import styles from './index.module.scss';
import { useState } from 'react';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState(PRODUCT.colors[0].name.toLowerCase());
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <h2>Colors</h2>
      <div className={styles.colorsContainer}>
        {PRODUCT.colors.map((color) => (
          <div
            key={color.name}
            className={`${styles.radioOption}`}
            onClick={() => handleColorClick(color.name.toLowerCase())}
            style={{
              borderColor:
                selectedColor === color.name.toLowerCase() ? color.bgColor : 'transparent',
            }}>
            <span className={styles.srOnly}>{color.name}</span>
            <span className={styles.radioButton} style={{ backgroundColor: color.bgColor }}></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
