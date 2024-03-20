import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ title, link, img, alt, price, discountedPrice }) => {
  return (
    <div className={styles.productCardWrapper}>
      <Link href={link} aria-label={alt}>
        {img && (
          <div className={styles.imageWrapper}>
            <Image src={img} alt={`product ${img}`} fill sizes='550' />
          </div>
        )}
        <div className={styles.textWrapper}>
          <h4 className={styles.title}>{title}</h4>
          <span className={styles.price}>${price}</span>
          {discountedPrice && <span className={styles.discountedPrice}>${discountedPrice}</span>}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
