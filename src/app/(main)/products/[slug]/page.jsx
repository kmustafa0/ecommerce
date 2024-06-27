'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
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
      let images = product.images;
      if (selectedColor) {
        const color = product.colors.find((color) => color.name.toLowerCase() === selectedColor);
        images = color ? color.images : product.images;
      }
      images = images.sort((a, b) => b.primary - a.primary);
      setFilteredImages(images);
    }
  }, [selectedColor, product]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
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
            <SizePicker
              productSizes={product.sizes}
              productColors={product.colors}
              selectedColor={selectedColor}
            />
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
