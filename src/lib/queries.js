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

export const getProduct = async (slug, color) => {
  try {
    const url = color ? `/api/products/${slug}?color=${color}` : `/api/products/${slug}`;
    const data = await fetcher(url);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch products');
  }
};
