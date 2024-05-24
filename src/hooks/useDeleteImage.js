'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const useDeleteImage = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data) => {
      try {
        await axios.delete('/api/deleteHeroImage', { data });
      } catch (error) {
        console.error('Error deleting image: ', error);
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['get-hero-images']);
    },
    onError: (error) => {
      console.error('Error deleting image:', error);
    },
  });

  return mutation;
};

export default useDeleteImage;
