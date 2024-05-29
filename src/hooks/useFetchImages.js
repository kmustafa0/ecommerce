'use client';
import { getImages } from '@/lib/queries';
import { useQuery } from '@tanstack/react-query';

const useFetchImages = () => {
  return useQuery({
    queryKey: ['get-hero-images'],
    queryFn: getImages,
    staleTime: 5 * 1000,
  });
};

export default useFetchImages;
