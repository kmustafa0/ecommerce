import React from 'react';
import styles from './InputField.module.scss';

const InputField = ({ label, id, name, value, onChange, placeholder }) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id}>{label}:</label>
      <input
        type='text'
        id={id}
        name={name}
        value={onChange ? value : undefined}
        defaultValue={!onChange ? value : undefined}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
