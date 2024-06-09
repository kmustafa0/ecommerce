'use client';
import { getProduct } from '@/lib/queries';
import { useQuery } from '@tanstack/react-query';

const useFetchProduct = (slug, color) => {
  return useQuery({
    queryKey: ['get-product', slug, color],
    queryFn: () => getProduct(slug, color),
    staleTime: 60 * 1000 * 5,
    gcTime: 1000 * 60 * 30,
  });
};

export default useFetchProduct;
