'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { createFilePreview, revokeFilePreviews } from '@/utils/fileHelpers';
import styles from './Dropzone.module.scss';
import { uploadFile } from '@/lib/actions';
import FilePreviewList from './FilePreviewList/FilePreviewList';
import RejectedFilesList from './RejectedFilesList/RejectedFilesList';

const turkishToEnglishMap = {
  ç: 'c',
  ğ: 'g',
  ı: 'i',
  ö: 'o',
  ş: 's',
  ü: 'u',
  Ç: 'C',
  Ğ: 'G',
  İ: 'I',
  Ö: 'O',
  Ş: 'S',
  Ü: 'U',
};

function replaceTurkishCharacters(file) {
  let newName = file.name
    .split('')
    .map((char) => turkishToEnglishMap[char] || char)
    .join('');
  return new File([file], newName, { type: file.type });
}

const Dropzone = () => {
  const [files, setFiles] = useState([]);
  const [rejected, setRejected] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      const existingFilesCount = files.length;
      const totalAcceptedFilesCount = existingFilesCount + acceptedFiles.length;
      let finalAcceptedFiles = [];
      let finalRejectedFiles = [];

      if (totalAcceptedFilesCount > 10) {
        const remainingSlots = 10 - existingFilesCount;
        finalAcceptedFiles = acceptedFiles
          .slice(0, remainingSlots)
          .map((file) => replaceTurkishCharacters(file));
        finalRejectedFiles = acceptedFiles.slice(remainingSlots);
      } else {
        finalAcceptedFiles = acceptedFiles.map((file) => replaceTurkishCharacters(file));
      }

      setFiles((previousFiles) => [...previousFiles, ...finalAcceptedFiles.map(createFilePreview)]);

      if (rejectedFiles?.length) {
        setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
      }

      if (finalRejectedFiles.length) {
        setRejected((previousFiles) => [
          ...previousFiles,
          ...finalRejectedFiles.map((file) => ({ file })),
        ]);
      }
    },
    [files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': [],
    },
    maxSize: 1024 * 1000,
    onDrop,
  });

  useEffect(() => {
    return () => revokeFilePreviews(files);
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
    success && (setFiles([]), setRejected([]));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          {...getRootProps({})}
          className={`${styles.dropzone} ${isDragActive ? styles.dragActive : ''}`}>
          <input {...getInputProps()} name='file' id='file' />
          <div className={styles.textWrapper}>
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

        <section className={styles.section}>
          <div className={styles.preview}>
            <h3>Preview</h3>
            {files.length > 0 || rejected.length > 0 ? (
              <button type='button' className={styles.removeAll} onClick={removeAll}>
                REMOVE ALL FILES
              </button>
            ) : null}
          </div>

          {files.length > 0 && (
            <>
              <h2 className={styles.title}>Accepted Files</h2>
              <FilePreviewList files={files} removeFile={removeFile} />
            </>
          )}

          {rejected.length > 0 && (
            <>
              <h2 className={`${styles.title} ${styles.rejectedTitle}`}>Rejected Files</h2>
              <RejectedFilesList rejected={rejected} removeRejected={removeRejected} />
            </>
          )}
        </section>
        {files.length > 0 && (
          <button type='submit' name='submitBtn' id='submitBtn' className={styles.uploadBtn}>
            Upload
          </button>
        )}
      </form>
    </>
  );
};

export default Dropzone;
