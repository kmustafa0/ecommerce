'use client';
import axios from 'axios';

export const getImages = async () => {
  try {
    const baseURL = process.env.NEXT_PUBLIC_NEXTAUTH_URL;
    const response = await axios.get(`${baseURL}/api/heroImages`, {
      cache: 'no-store',
    });

    if (response.status !== 200) {
      throw new Error('Failed');
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch images');
  }
};
