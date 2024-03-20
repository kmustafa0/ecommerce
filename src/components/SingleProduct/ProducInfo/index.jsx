import { classNames } from '@/utils/classNames';
import Link from 'next/link';
import React from 'react';
import { IoStar } from 'react-icons/io5';
import styles from './index.module.scss';
import { PRODUCT, REVIEWS } from '@/lib/contstants';

const ProductInfo = () => {
  return (
    <>
      <div className={styles.infoContainer}>
        <h1>{PRODUCT.name}</h1>
        <p>{PRODUCT.price}</p>
      </div>
      <div className={styles.reviewsContainer}>
        <h2>Reviews</h2>
        <div className={styles.reviewInfo}>
          <p className={styles.averageRating}>
            {REVIEWS.average}
            <span>out of 5 stars</span>
          </p>
          <div className={styles.stars}>
            {[0, 1, 2, 3, 4].map((rating) => (
              <IoStar
                key={rating}
                className={classNames(
                  REVIEWS.average > rating ? styles.yellowStar : styles.grayStar,
                  styles.starIcon
                )}
                aria-hidden='true'
              />
            ))}
          </div>
          <div className={styles.reviewCount}>
            <Link href='#'>
              <span>{REVIEWS.totalCount}</span> reviews
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
