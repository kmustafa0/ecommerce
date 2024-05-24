'use client';
import React from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';
import styles from './Dropzone.module.scss';
import { useDropzone } from 'react-dropzone';
import { uploadFile } from '@/lib/actions';
import FilePreviewList from './FilePreviewList/FilePreviewList';
import RejectedFilesList from './RejectedFilesList/RejectedFilesList';
import { useDropzoneHandlers, useSaveImageUrl } from '@/hooks';

const Dropzone = () => {
  const {
    files,
    rejected,
    fileInputs,
    handleInputChange,
    onDrop,
    removeFile,
    removeAll,
    removeRejected,
  } = useDropzoneHandlers();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': [],
    },
    maxSize: 1024 * 1000,
    onDrop,
  });
  const { mutate: saveImage } = useSaveImageUrl();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!files?.length) return;

    let success = true;

    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('alt', fileInputs[file.name]?.alt || '');
      formData.append('link', fileInputs[file.name]?.link || '');
      const src = await uploadFile(formData);
      if (!src) {
        success = false;
        break;
      }

      try {
        await saveImage({
          src,
          alt: formData.get('alt'),
          link: formData.get('link'),
        });
      } catch (error) {
        success = false;
        console.error('Error saving image:', error);
        break;
      }
    }

    success && removeAll();
  };

  return (
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
          {(files.length > 0 || rejected.length > 0) && (
            <button type='button' className={styles.removeAll} onClick={removeAll}>
              REMOVE ALL FILES
            </button>
          )}
        </div>

        {files.length > 0 && (
          <>
            <h2 className={styles.title}>Accepted Files</h2>
            <FilePreviewList
              files={files}
              fileInputs={fileInputs}
              handleInputChange={handleInputChange}
              removeFile={removeFile}
            />
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
  );
};

export default Dropzone;
