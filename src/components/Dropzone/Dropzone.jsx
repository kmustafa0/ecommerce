'use client';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoClose } from 'react-icons/io5';
import styles from './index.module.scss';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { uploadFile } from '@/lib/actions';

const Dropzone = ({ className }) => {
  const [files, setFiles] = useState([]);
  const [rejected, setRejected] = useState([]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) })),
      ]);
    }

    if (rejectedFiles?.length) {
      setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': [],
    },
    maxSize: 1024 * 1000,
    onDrop,
  });

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  const removeAll = () => {
    setFiles([]);
    setRejected([]);
  };

  const removeRejected = (name) => {
    setRejected((files) => files.filter(({ file }) => file.name !== name));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!files?.length) return;

    let success = true;
    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);
      const fileSuccess = await uploadFile(formData);
      if (!fileSuccess) {
        success = false;
        break;
      }
    }

    if (success) {
      alert('File(s) uploaded successfully');
      setFiles([]);
      setRejected([]);
    } else {
      alert('An error occurred during file upload');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          {...getRootProps({
            className: className,
          })}>
          <input {...getInputProps()} name='file' id='file' />
          <div className={styles.test}>
            <IoCloudUploadOutline size={30} color='707070' />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>
                Drag &apos;n&apos; drop some files here, or <span>click</span> to select files
              </p>
            )}
          </div>
        </div>

        {/* preview images */}
        <section className={styles.section}>
          <div className={styles.preview}>
            <h3>Preview</h3>
            <button type='button' className={styles.removeAll} onClick={removeAll}>
              REMOVE ALL FILES
            </button>
          </div>

          {/* Accepted files */}
          <h3 className={styles.title}>Accepted Files</h3>
          <ul className={styles.acceptedList}>
            {files.map((file) => (
              <li key={file.name} className={styles.acceptedListItem}>
                <Image
                  src={file.preview}
                  alt={file.name}
                  width={100}
                  height={100}
                  onLoad={() => {
                    URL.revokeObjectURL(file.preview);
                  }}
                  className={styles.acceptedImage}
                />
                <p className={styles.acceptedFileName}>{file.name}</p>
                <button
                  type='button'
                  className={styles.singleRemoveBtn}
                  onClick={() => removeFile(file.name)}>
                  <IoClose />
                </button>
              </li>
            ))}
          </ul>

          {/* Rejected Files */}
          <h3 className={`${styles.title} ${styles.rejectedTitle}`}>Rejected Files</h3>
          <ul>
            {rejected.map(({ file, errors }) => (
              <li key={file.name} className={styles.rejectedList}>
                <div>
                  <p className={styles.rejectedFileName}>{file.name}</p>
                  <ul className={styles.errorList}>
                    {errors.map((error) => (
                      <li key={error.code}>{error.message}</li>
                    ))}
                  </ul>
                </div>
                <button
                  type='button'
                  className={styles.rejectedRemoveBtn}
                  onClick={() => removeRejected(file.name)}>
                  remove
                </button>
              </li>
            ))}
          </ul>
        </section>
        <button type='submit' name='submitBtn' id='submitBtn' className={styles.uploadBtn}>
          Upload
        </button>
      </form>
    </>
  );
};

export default Dropzone;
