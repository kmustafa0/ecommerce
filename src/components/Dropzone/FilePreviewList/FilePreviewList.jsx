import React from 'react';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import styles from './FilePreviewList.module.scss';

const FilePreviewList = ({ files, fileInputs, handleInputChange, removeFile }) => {
  return (
    <ul className={styles.acceptedList}>
      {files.map((file) => (
        <li key={file.name} className={styles.acceptedListItem}>
          <div className={styles.imageWrapper}>
            <Image
              src={file.preview}
              alt={file.name}
              fill
              onLoad={() => {
                URL.revokeObjectURL(file.preview);
              }}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor={`alt_${file.name}`}>Alt Text:</label>
            <input
              type='text'
              id={`alt_${file.name}`}
              name={`alt_${file.name}`}
              value={fileInputs[file.name]?.alt || ''}
              onChange={(e) => handleInputChange(file.name, 'alt', e.target.value)}
              placeholder='Enter alt text'
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor={`link_${file.name}`}>Link:</label>
            <input
              type='text'
              id={`link_${file.name}`}
              name={`link_${file.name}`}
              value={fileInputs[file.name]?.link || ''}
              onChange={(e) => handleInputChange(file.name, 'link', e.target.value)}
              placeholder='Enter link'
            />
          </div>
          <button
            type='button'
            className={styles.singleRemoveBtn}
            onClick={() => removeFile(file.name)}>
            <IoClose />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FilePreviewList;
