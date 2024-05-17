'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';
import styles from './CurrentImages.module.scss';
import { SlClose } from 'react-icons/sl';

const ConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.modalBackground}>
          <div className={styles.modalContent}>
            <SlClose onClick={onCancel} className={styles.closeButton} />
            <h1>Are you sure?</h1>
            <p>Are you sure want to delete this item? This action cannot be undone </p>
            <div className={styles.buttonContainer}>
              <button
                type='button'
                onClick={onCancel}
                className={`${styles.confirmationButton} ${styles.no}`}>
                Cancel
              </button>
              <button
                type='button'
                onClick={onConfirm}
                className={`${styles.confirmationButton} ${styles.yes}`}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

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
        <Image
          src={image.src}
          alt={`${image?.id}-image`}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          priority
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
