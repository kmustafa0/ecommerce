'use client';
import { getProducts } from '@/lib/queries';
import { useQuery } from '@tanstack/react-query';

const useFetchProducts = () => {
  return useQuery({
    queryKey: ['get-products'],
    queryFn: getProducts,
    staleTime: 5 * 1000,
  });
};

export default useFetchProducts;
