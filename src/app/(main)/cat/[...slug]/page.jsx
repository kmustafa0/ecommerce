/* 'use client';
import { useFetchProducts } from '@/hooks'; */
import React from 'react';

const CategoryPage = ({ params }) => {
  const formattedSlug = params.slug
    .map((slug) => slug.charAt(0).toUpperCase() + slug.slice(1))
    .join(' ');
  /* const { data: products, isLoading, error } = useFetchProducts();
  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Error: {error}</h3>; */
  return (
    <>
      <div>{formattedSlug} Page</div>{' '}
      {/* <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul> */}
    </>
  );
};

export default CategoryPage;
