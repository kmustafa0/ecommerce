import ProductInfo from '@/components/SingleProduct/ProducInfo';
import React from 'react';
import styles from './productPage.module.scss';
import ImageGallery from '@/components/SingleProduct/ImageGallery';
import ColorPicker from '@/components/SingleProduct/ColorPicker';
import SizePicker from '@/components/SingleProduct/SizePicker';
import AddToCart from '@/components/SingleProduct/AddToCart';
import ProductDetails from '@/components/SingleProduct/ProductDetails';
import Policies from '@/components/SingleProduct/Policies';

const ProductPage = ({ params }) => {
  return (
    <div className={styles.productPageWrapper}>
      <div className={styles.productPageContainer}>
        <div className={styles.productInfoWrapper}>
          <ProductInfo />
        </div>
        <ImageGallery />
        <div className={styles.productSpecs}>
          <div>
            <ColorPicker />
            <SizePicker />
            <AddToCart />
          </div>

          <ProductDetails />
          <Policies />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
