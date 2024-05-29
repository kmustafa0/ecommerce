'use client';
import React from 'react';
import styles from './CurrentProducts.module.scss';
import { useFetchProducts } from '@/hooks';

const CurrentProducts = () => {
  const { data: products, isLoading, error } = useFetchProducts();
  if (error) return <h3>Error: {error}</h3>;
  return (
    <>
      <h3>Current Products</h3>
      {isLoading ? (
        <h4>Loading....</h4>
      ) : (
        <div className={styles.products}>
          {products &&
            products.map((product) => (
              <div key={product.id}>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default CurrentProducts;
