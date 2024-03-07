import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { RiArrowRightLine } from 'react-icons/ri';
import Link from 'next/link';

const LatestCollections = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h4>NEW COLLECTION</h4>
            <h2>Best Sweatshirts and tracksuits for everyone!</h2>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
              facilisis.
            </p>
            <button type='button' aria-label='Go latest collection'>
              Shop Now <RiArrowRightLine size={25} />
            </button>
          </div>
          <div className={styles.imageContainer}>
            <Image src={'/collection1.jpg'} alt='image' fill />
          </div>
          <Link href={'#'} aria-label='Go to category'></Link>
        </div>
      </div>
    </section>
  );
};

export default LatestCollections;
