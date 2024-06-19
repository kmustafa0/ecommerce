'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ProductInfo from '@/components/SingleProduct/ProducInfo';
import ImageGallery from '@/components/SingleProduct/ImageGallery';
import ColorPicker from '@/components/SingleProduct/ColorPicker';
import SizePicker from '@/components/SingleProduct/SizePicker';
import AddToCart from '@/components/SingleProduct/AddToCart';
import ProductDetails from '@/components/SingleProduct/ProductDetails';
import Policies from '@/components/SingleProduct/Policies';
import { useFetchProducts } from '@/hooks';
import NotFound from '@/app/not-found';
import styles from './productPage.module.scss';

const ProductPage = ({ params }) => {
  const { slug } = params;
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialColor = searchParams.get('color');

  const [selectedColor, setSelectedColor] = useState(initialColor || '');
  const [filteredImages, setFilteredImages] = useState([]);
  const {
    data: products,
    isLoading,
    error,
  } = useFetchProducts({
    enabled: !!slug,
  });

  const product = products ? products.find((product) => product.slug === slug) : null;

  useEffect(() => {
    if (product) {
      if (selectedColor) {
        const color = product.colors.find((color) => color.name.toLowerCase() === selectedColor);
        setFilteredImages(color ? color.images : product.images);
      } else {
        setFilteredImages(product.images);
      }
    }
  }, [selectedColor, product]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    router.push(`?color=${color}`, undefined, { shallow: true, scroll: false });
  };

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>Loading....</div>;
  if (!product) return <NotFound />;

  return (
    <div className={styles.productPageWrapper}>
      <div className={styles.productPageContainer}>
        <div className={styles.productInfoWrapper}>
          <ProductInfo productName={product.name} productPrice={product.price} />
        </div>
        <ImageGallery productImages={filteredImages} />
        <div className={styles.productSpecs}>
          <div>
            <ColorPicker
              productColors={product.colors}
              selectedColor={selectedColor}
              onColorChange={handleColorChange}
            />
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
