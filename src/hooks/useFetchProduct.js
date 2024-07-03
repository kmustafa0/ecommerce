'use client';
import { getProduct } from '@/lib/queries';
import { useQuery } from '@tanstack/react-query';

const useFetchProduct = (slug) => {
  return useQuery({
    queryKey: ['get-product', slug],
    queryFn: () => getProduct(slug),
    staleTime: 5 * 1000,
  });
};

export default useFetchProduct;
