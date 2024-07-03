'use client';
import React from 'react';
import { SlClose } from 'react-icons/sl';
import styles from './ConfirmationModal.module.scss';

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText,
  cancelText,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <SlClose onClick={onClose} className={styles.closeButton} />
        {title && <h1>{title}</h1>}
        {message && <p>{message}</p>}
        <div className={styles.buttonContainer}>
          <button
            type='button'
            onClick={onClose}
            className={`${styles.confirmationButton} ${styles.no}`}>
            {cancelText || 'Cancel'}
          </button>
          <button
            type='button'
            onClick={onConfirm}
            className={`${styles.confirmationButton} ${styles.yes}`}>
            {confirmText || 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
