import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ title, link, img, alt, price, discountedPrice, customStyles }) => {
  return (
    <div className={styles.productCardWrapper}>
      <Link href={`/products/${link}`} aria-label={alt}>
        {img && (
          <div className={`${styles.imageWrapper} ${customStyles ? customStyles : ''}`}>
            <Image src={img} alt={`${alt}`} fill sizes='550' />
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
