import React from 'react'

export const Input = ({ id, name, label }) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input type="text" name={name} id={id} />
    </div>
  )
}

