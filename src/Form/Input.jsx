import React from 'react';

export const Input = ({ id, label, onChange, ...props }) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input
        type="text"
        name={id}
        id={id}
        onChange={onChange}
        {...props}
      />
    </>
  );
};
