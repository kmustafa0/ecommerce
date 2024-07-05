'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { RiArrowGoBackLine } from 'react-icons/ri';
import ImageGallery from '@/components/Admin/ImageGallery/ImageGallery';
import InputWrapper from '@/components/Admin/InputWrapper/InputWrapper';
import { useFetchProduct } from '@/hooks';
import styles from './ProductEdit.module.scss';

const ProductEdit = ({ params }) => {
  const { slug } = params;
  const { data: product, error } = useFetchProduct(slug);
  const [productColors, setProductColors] = useState([]);

  useEffect(() => {
    if (product) {
      setProductColors(product.colors);
    }
  }, [product]);

  if (error) {
    return <div>Error loading product details</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.productEdit}>
      <div className={styles.contentHeader}>
        <h1>Edit Product</h1>
        <Link href='/admin/products'>
          <RiArrowGoBackLine size={20} className={styles.goBackButton} />
        </Link>
      </div>
      <div className={styles.generalInfo}>
        <h4>General Info</h4>
        <div>
          <InputWrapper value={product.name} title='Product Name' />
          <InputWrapper value={product.description} title='Product Description' />
          <label>Product Details</label>
          <div className={styles.productDetails}>
            {product.details.map((detail, index) => (
              <InputWrapper key={index} value={detail} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.media}>
        <h4>Colors & Images</h4>
        <ImageGallery colors={productColors} />
      </div>
      <InputWrapper value={product.price} title='Product Price' />
      <InputWrapper value={product.category.name} title='Product Category' />
      <InputWrapper value={product.slug} title='Product Slug' />
      <label>Product Sizes</label>
      <br />
      {product.sizes.map((size) => (
        <span key={size.id}>{size.name}-</span>
      ))}
    </div>
  );
};

export default ProductEdit;
