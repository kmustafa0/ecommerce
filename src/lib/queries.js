import axios from 'axios';

export const getImages = async () => {
  try {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    console.log('baseURL: ', baseURL);
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
