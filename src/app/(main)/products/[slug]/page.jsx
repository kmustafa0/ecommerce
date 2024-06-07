'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import ProductInfo from '@/components/SingleProduct/ProducInfo';
import styles from './productPage.module.scss';
import ImageGallery from '@/components/SingleProduct/ImageGallery';
import ColorPicker from '@/components/SingleProduct/ColorPicker';
import SizePicker from '@/components/SingleProduct/SizePicker';
import AddToCart from '@/components/SingleProduct/AddToCart';
import ProductDetails from '@/components/SingleProduct/ProductDetails';
import Policies from '@/components/SingleProduct/Policies';
import NotFound from '@/app/not-found';
import { useFetchProduct } from '@/hooks';

const ProductPage = ({ params }) => {
  const { slug } = params;
  const { data: product, isLoading, error } = useFetchProduct(slug);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryColor = searchParams.get('color');
  const querySize = searchParams.get('size');

  const [selectedColor, setSelectedColor] = useState(queryColor || '');
  const [selectedSize, setSelectedSize] = useState(querySize || '');

  useEffect(() => {
    if (product && !queryColor) {
      setSelectedColor(product.colors[0]?.name.toLowerCase());
    }
    if (product && !querySize) {
      setSelectedSize(product.sizes[0]?.name.toLowerCase());
    }
  }, [product, queryColor, querySize]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    const params = new URLSearchParams(searchParams);
    params.set('color', color);
    if (!params.get('size')) {
      params.set('size', product.sizes[0]?.name.toLowerCase());
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    const params = new URLSearchParams(searchParams);
    params.set('size', size);
    if (!params.get('color')) {
      params.set('color', product.colors[0]?.name.toLowerCase());
    }
    router.replace(`${pathname}?${params.toString()}`);
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
        <ImageGallery productImages={product.images} />
        <div className={styles.productSpecs}>
          <div>
            <ColorPicker
              productColors={product.colors}
              selectedColor={selectedColor}
              onColorChange={handleColorChange}
            />
            <SizePicker
              productSizes={product.sizes}
              selectedSize={selectedSize}
              onSizeChange={handleSizeChange}
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
