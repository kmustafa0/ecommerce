'use client';
//import { PRODUCT } from '@/lib/contstants';
import styles from './index.module.scss';
import { useState } from 'react';

const ColorPicker = ({ productColors }) => {
  const [selectedColor, setSelectedColor] = useState(productColors[0].name.toLowerCase());
  const handleColorClick = (color) => {
    setSelectedColor(color);
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
              borderColor: selectedColor === color.name.toLowerCase() ? color.color : 'transparent',
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
