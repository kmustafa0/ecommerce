'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data) => {
      try {
        await axios.delete('/api/products/delete', { data });
      } catch (error) {
        console.error('Error deleting product: ', error);
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['get-products']);
    },
    onError: (error) => {
      console.error('Error deleting product:', error);
    },
  });

  return mutation;
};

export default useDeleteProduct;
