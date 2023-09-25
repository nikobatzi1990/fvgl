import React from 'react';
import '../styles/Input.css';

const Input = (props) => {
  const { className, placeholder, onChange } = props;

  return(
    <div>
      <input
        className = { className }
        placeholder = { placeholder }
        onChange={ onChange } >
      </input>
    </div>
  )
}

export default Input;
