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
