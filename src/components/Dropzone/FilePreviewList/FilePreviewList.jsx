import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import styles from './FilePreviewList.module.scss';

const FilePreviewList = ({ files, removeFile }) => {
  return (
    <ul className={styles.acceptedList}>
      {files.map((file) => (
        <li key={file.name} className={styles.acceptedListItem}>
          <Image
            src={file.preview}
            alt={file.name}
            fill
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
          />
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
