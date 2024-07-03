'use client';
import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import styles from './CurrentImages.module.scss';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import ImagePreview from '../shared/ImagePreview/ImagePreview';
import InputField from '../shared/InputField/InputField';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const CurrentImagesList = ({ image, deleteImage }) => {
  const [formData, setFormData] = useState({ alt: image.alt, link: image.link });
  const [isChanged, setIsChanged] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const queryClient = useQueryClient();

  const { mutate: updateImage } = useMutation({
    mutationKey: ['updateHeroImages'],
    mutationFn: async (imageData) => {
      await axios.put('/api/updateHeroImage', imageData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['heroImages']);
      setIsChanged(false);
    },
    onError: (error) => {
      console.error('Error updating image:', error);
    },
  });

  const handleDelete = async () => {
    if (!showConfirmation) {
      setShowConfirmation(true);
      return;
    }
    setShowConfirmation(false);

    const data = { id: image.id, src: image.src };
    await deleteImage(data);
  };
  const handleUpdate = async () => {
    if (!isChanged) return;
    await updateImage({ id: image.id, ...formData });
  };

  const handleInputChange = (event, type) => {
    let value = event.target.value;

    if (type === 'alt') {
      value = value
        .replace(/[^a-zA-Z\s]/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
    } else if (type === 'link') {
      value = value
        .replace(/[^a-zA-Z0-9\-/#\s]/g, '')
        .replace(/^\s*#\s*/, '#')
        .replace(/\s+/g, '');
    }

    setFormData((prev) => ({ ...prev, [type]: value }));
    setIsChanged(true);
  };

  return (
    <>
      <li key={image.id}>
        <ImagePreview src={image.src} alt={`${formData.alt}-image`} />
        <InputField
          label='Alt Text'
          id={`alt_${image.id}`}
          name={`alt_${image.id}`}
          value={formData.alt}
          onChange={(e) => handleInputChange(e, 'alt')}
          placeholder='Enter alt text'
        />
        <InputField
          label='Link'
          id={`link_${image.id}`}
          name={`link_${image.id}`}
          value={formData.link}
          onChange={(e) => handleInputChange(e, 'link')}
          placeholder='Enter link'
        />
        <button type='button' className={styles.singleRemoveBtn} onClick={handleDelete}>
          <AiOutlineDelete size={20} />
        </button>
        <button
          type='button'
          className={styles.updateBtn}
          onClick={handleUpdate}
          style={{ opacity: isChanged ? 1 : '' }}>
          Update
        </button>
      </li>
      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={handleDelete}
        title='Are you sure?'
        message='Are you sure you want to delete this item? This action cannot be undone.'
        confirmText='Delete'
        cancelText='Cancel'
      />
    </>
  );
};

export default CurrentImagesList;
