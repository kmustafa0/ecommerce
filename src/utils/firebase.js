// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage, ref, deleteObject } from 'firebase/storage';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const deleteImageFromFirebase = async (filePath) => {
  const imageRef = ref(storage, filePath);
  try {
    await deleteObject(imageRef);
    console.log(`Successfully deleted ${filePath}`);
  } catch (error) {
    console.error('Error deleting file from Firebase:', error);
    throw new Error('Error deleting file from Firebase');
  }
};
