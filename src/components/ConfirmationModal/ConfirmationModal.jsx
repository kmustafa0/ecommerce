'use client';

import React from 'react';
import { SlClose } from 'react-icons/sl';
import styles from './ConfirmationModal.module.scss';

const ConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <SlClose onClick={onCancel} className={styles.closeButton} />
        <h1>Are you sure?</h1>
        <p>Are you sure want to delete this item? This action cannot be undone.</p>
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
  );
};

export default ConfirmationModal;
