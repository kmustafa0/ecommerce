import styles from './RejectedFilesList.module.scss';

const RejectedFilesList = ({ rejected, removeRejected }) => {
  return (
    <ul className={styles.rejectedList}>
      {rejected.map(({ file, errors }) => (
        <li key={file.name} className={styles.rejectedListItem}>
          <div className={styles.fileInfo}>
            <p className={styles.rejectedFileName}>{file.name}</p>
            <ul className={styles.errorList}>
              {errors && errors.map((error) => <li key={error.code}>{error.message}</li>)}
            </ul>
          </div>
          <button
            type='button'
            className={styles.rejectedRemoveBtn}
            onClick={() => removeRejected(file.name)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default RejectedFilesList;
