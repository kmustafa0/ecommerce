'use client';
import ProductInfo from '@/components/SingleProduct/ProducInfo';
import React from 'react';
import styles from './productPage.module.scss';
import ImageGallery from '@/components/SingleProduct/ImageGallery';
import ColorPicker from '@/components/SingleProduct/ColorPicker';
import SizePicker from '@/components/SingleProduct/SizePicker';
import AddToCart from '@/components/SingleProduct/AddToCart';
import ProductDetails from '@/components/SingleProduct/ProductDetails';
import Policies from '@/components/SingleProduct/Policies';
import { useFetchProducts } from '@/hooks';
import NotFound from '@/app/not-found';

const ProductPage = ({ params }) => {
  const productId = params.id;

  const {
    data: products,
    isLoading,
    error,
  } = useFetchProducts({
    enabled: !!productId,
  });

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>Loading....</div>;

  const product = products.find((product) => product.id === productId);
  if (!product) return <NotFound />;
  return (
    <div className={styles.productPageWrapper}>
      <div className={styles.productPageContainer}>
        <div className={styles.productInfoWrapper}>
          <ProductInfo productName={product.name} productPrice={product.price} />
        </div>
        <ImageGallery productImages={product.images} />
        <div className={styles.productSpecs}>
          <div>
            <ColorPicker productColors={product.colors} />
            <SizePicker productSizes={product.sizes} />
            <AddToCart />
          </div>

          <ProductDetails description={product.description} productDetails={product.details} />
          <Policies />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
