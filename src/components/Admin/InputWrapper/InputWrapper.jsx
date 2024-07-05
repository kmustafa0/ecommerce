import React from 'react';

const InputWrapper = ({ title, value = '', id }) => {
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <input id={id} name={id} value={value} disabled />
    </div>
  );
};

export default InputWrapper;
