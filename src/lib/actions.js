'use server';
import { app } from '@/utils/firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export const uploadFile = async (formData) => {
  try {
    const file = formData.get('file');

    if (!file) throw new Error('No file provided');
    if (file.size < 1) throw new Error('File is empty');

    const storage = getStorage(app);
    const storageRef = ref(storage, `hero-images/${file.name}`);

    return new Promise((resolve, reject) => {
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        (error) => {
          console.error(error);
          reject(false);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log('File available at', downloadURL);
            resolve(downloadURL);
          } catch (error) {
            console.error(error);
            reject(false);
          }
        }
      );
    });
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const saveImageUrl = async (data) => {
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/heroImages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to save image URL');
    }

    const result = await response.json();
    console.log('result: ', result);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getImages = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/heroImages`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed');
  }
  return res.json();
};
