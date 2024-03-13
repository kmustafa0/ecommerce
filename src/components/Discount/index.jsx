import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Discount = () => {
  return (
    <section className='discount'>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image src={'/discount1.jpg'} alt='image' fill />
          </div>
          <div className={styles.textContainer}>
            <h4>DEAL OF THE WEEK</h4>
            <h2>Jackson Hole Grey Plaid T-shirt</h2>
            <p>
              Dress it up or dress it down the Roland Classic White Short Checkered T-shirt is your
              go-to piece for any occasion. Its clean lines and comfortable fit guarantee you will
              look and feel your best all day long.
            </p>
            <div className={styles.timer}>
              <div className={styles.dateItem}>
                <div className={styles.date}>31</div>
                <div className={styles.dateLabel}>d</div>
              </div>
              <span>:</span>
              <div className={styles.dateItem}>
                <div className={styles.date}>05</div>
                <div className={styles.dateLabel}>h</div>
              </div>
              <span>:</span>
              <div className={styles.dateItem}>
                <div className={styles.date}>49</div>
                <div className={styles.dateLabel}>m</div>
              </div>
              <span>:</span>
              <div className={styles.dateItem}>
                <div className={styles.date}>18</div>
                <div className={styles.dateLabel}>s</div>
              </div>
            </div>
            <button type='button' aria-label='Go latest collection'>
              Shop Now
            </button>
            <div className={styles.endDate}>
              Limited time offer. The deal will expires on <b>April 11, 2024</b> HURRY UP!
            </div>
          </div>
          <Link href={'#'} aria-label='Go to category'></Link>
        </div>
      </div>
    </section>
  );
};

export default Discount;
