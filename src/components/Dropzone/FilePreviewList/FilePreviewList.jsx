import React from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './FilePreviewList.module.scss';
import ImagePreview from '@/components/shared/ImagePreview/ImagePreview';
import InputField from '@/components/shared/InputField/InputField';

const FilePreviewList = ({ files, fileInputs, handleInputChange, removeFile }) => {
  return (
    <ul className={styles.acceptedList}>
      {files.map((file) => (
        <li key={file.name} className={styles.acceptedListItem}>
          <ImagePreview
            src={file.preview}
            alt={file.name}
            onLoad={() => URL.revokeObjectURL(file.preview)}
          />
          <InputField
            label='Alt Text'
            id={`alt_${file.name}`}
            name={`alt_${file.name}`}
            value={fileInputs[file.name]?.alt || ''}
            onChange={(e) => handleInputChange(file.name, 'alt', e.target.value)}
            placeholder='Enter alt text'
          />
          <InputField
            label='Link'
            id={`link_${file.name}`}
            name={`link_${file.name}`}
            value={fileInputs[file.name]?.link || ''}
            onChange={(e) => handleInputChange(file.name, 'link', e.target.value)}
            placeholder='Enter link'
          />
          <button
            type='button'
            className={styles.singleRemoveBtn}
            onClick={() => removeFile(file.name)}>
            <FaTrash />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FilePreviewList;
