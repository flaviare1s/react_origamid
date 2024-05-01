import React from 'react';

export const Input = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input
        type="text"
        name={id}
        id={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
};
