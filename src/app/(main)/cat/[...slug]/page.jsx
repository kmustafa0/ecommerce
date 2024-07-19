'use client';
import Content from '@/components/CategoryPage/Content/Content';
import Sidebar from '@/components/CategoryPage/Sidebar/Sidebar';
import { useFetchCategoryProducts } from '@/hooks';
import React from 'react';
import styles from './CategoryPage.module.scss';

const CategoryPage = ({ params }) => {
  const formattedSlug = params.slug
    .map((slug) => slug.charAt(0).toUpperCase() + slug.slice(1))
    .join(' ');

  const { data: products, isLoading } = useFetchCategoryProducts(formattedSlug);

  if (isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center' }}>Loading...</div>;
  }

  if (!products || !products.products || products.products.length === 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        No products found for this category.
      </div>
    );
  }

  return (
    <div className={styles.categoryPageWrapper}>
      <div className={styles.categoryPageContainer}>
        <Sidebar />
        <Content products={products.products} />
      </div>
    </div>
  );
};

export default CategoryPage;
