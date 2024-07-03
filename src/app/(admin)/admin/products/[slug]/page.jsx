'use client';
import { useFetchProduct } from '@/hooks';
import React from 'react';

const ProductEdit = ({ params }) => {
  const { slug } = params;
  const { data: products } = useFetchProduct(slug);
  console.log(products);

  return <div>Product: {params.slug}</div>;
};

export default ProductEdit;
