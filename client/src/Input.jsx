import React from 'react'

const Input = (props) => {
  const { className, label, labelName, placeholder, onChange } = props;

  return(
    <div>
      <label htmlFor={ label }>{ labelName } </label>
      <input
        className = { className }
        placeholder = { placeholder }
        onChange={ onChange } >
      </input>
    </div>
  )
}

export default Input;
