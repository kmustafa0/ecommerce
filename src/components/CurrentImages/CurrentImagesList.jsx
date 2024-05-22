'use client';
import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './CurrentImages.module.scss';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import ImagePreview from '../shared/ImagePreview/ImagePreview';
import InputField from '../shared/InputField/InputField';

const CurrentImagesList = ({ image }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = async (id, src) => {
    if (!showConfirmation) {
      setShowConfirmation(true);
      return;
    }

    try {
      const response = await fetch('/api/deleteHeroImage', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, src }),
      });

      if (response.ok) {
        /* TODO need to update component */
      } else {
        const errorMessage = await response.text();
        console.error('Failed to delete image', errorMessage);
      }
    } catch (error) {
      console.error('Error deleting image:', error);
    } finally {
      setShowConfirmation(false);
    }
  };

  return (
    <>
      <li key={image.id}>
        <ImagePreview src={image.src} alt={`${image?.alt}-image`} />
        <InputField
          label='Alt Text'
          id={`alt_${image.id}`}
          name={`alt_${image.id}`}
          value={image.alt}
          placeholder='Enter alt text'
        />
        <InputField
          label='Link'
          id={`link_${image.id}`}
          name={`link_${image.id}`}
          value={image.link}
          placeholder='Enter link'
        />
        <button
          type='button'
          className={styles.singleRemoveBtn}
          onClick={() => setShowConfirmation(true)}>
          <FaTrash />
        </button>
      </li>

      <ConfirmationModal
        isOpen={showConfirmation}
        onCancel={() => setShowConfirmation(false)}
        onConfirm={() => handleDelete(image.id, image.src)}
      />
    </>
  );
};

export default CurrentImagesList;
