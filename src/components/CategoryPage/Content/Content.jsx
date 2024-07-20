import ProductCard from '@/components/PopularProducts/Card';
import React from 'react';
import styles from './Content.module.scss';

const Content = ({ products }) => {
  return (
    <section className={styles.categoryPageContent}>
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          link={product.slug}
          alt={product.name}
          img={product.images[0].imageSrc}
          price={product.price}
          discountedPrice={product.discountedPrice}
          customStyles={styles.imageWrapper}
        />
      ))}
    </section>
  );
};

export default Content;
