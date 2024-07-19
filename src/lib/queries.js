import { fetcher } from './axios';

export const getImages = async () => {
  try {
    const data = await fetcher('/api/heroImages');
    return data.images;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch images');
  }
};

export const getProducts = async () => {
  try {
    const data = await fetcher('/api/products');
    return data.products;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch products');
  }
};

export const getProduct = async (slug) => {
  try {
    const data = await fetcher(`/api/products/${slug}`);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch products');
  }
};

export const getCategoryProducts = async (name) => {
  try {
    const data = await fetcher(`/api/categories/${name}`);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch category products');
  }
};
