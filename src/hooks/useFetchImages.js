'use client';
import { useQuery } from '@tanstack/react-query';
import { getImages } from '../lib/queries';

const useFetchImages = () => {
  return useQuery({
    queryKey: ['get-hero-images'],
    queryFn: async () => {
      const data = await getImages();
      return data.images;
    },
    staleTime: 5 * 1000,
  });
};

export default useFetchImages;
