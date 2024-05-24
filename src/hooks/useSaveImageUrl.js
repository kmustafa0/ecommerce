'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const useSaveImageUrl = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['saveImageUrl'],
    mutationFn: async (data) => {
      try {
        const response = await axios.post(`/api/heroImages`, data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status !== 200) {
          throw new Error('Failed to save image URL');
        }

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          throw new Error(error.response.data.message || 'Image upload failed');
        } else {
          throw new Error('An error occurred while saving the image');
        }
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries('hero-images');
    },
    onError: (error) => {
      console.error('Error saving image URL:', error.message);
    },
  });
};

export default useSaveImageUrl;
