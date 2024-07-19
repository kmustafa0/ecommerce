'use client';
import { getCategoryProducts } from '@/lib/queries';
import { useQuery } from '@tanstack/react-query';

const useFetchCategoryProducts = (name) => {
  return useQuery({
    queryKey: ['get-category-product', name],
    queryFn: () => getCategoryProducts(name),
    staleTime: 5 * 1000,
  });
};

export default useFetchCategoryProducts;
