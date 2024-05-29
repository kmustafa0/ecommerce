import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetcher = async (url) => {
  const response = await apiClient.get(url, { cache: 'no-store' });

  if (response.status !== 200) {
    throw new Error('Failed to fetch data');
  }

  return response.data;
};

export default apiClient;
