import React from 'react'

export const Input = ({ id, label, ...props }) => {
  console.log(props)
  return (
    <div style={{margin: '1rem 0'}}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </div>
  )
}

