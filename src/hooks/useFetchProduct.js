'use client';
import { getProduct } from '@/lib/queries';
import { useQuery } from '@tanstack/react-query';

const useFetchProduct = (slug, color) => {
  return useQuery({
    queryKey: ['get-product', slug, color],
    queryFn: () => getProduct(slug, color),
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
  });
};

export default useFetchProduct;
