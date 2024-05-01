import React from 'react';

export const Checkbox = ({ options, value, setValue }) => {
  function handleChange({target}) {
    if(target.checked) {
      setValue([...value, target.value])
    } else {
      setValue(value.filter((itemValue) => itemValue !== target.value))
    }
  }
  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input type="checkbox"
            id={option}
            value={option}
            onChange={handleChange}
            checked={value.includes(option)} />
            {option}
        </label>
      ))}
    </>
  );
};
