import React, { useEffect, useState } from 'react'

const Input = (props) => {
  const { className, label, labelName, placeholder, onChange } = props;

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [developer, setDeveloper] = useState('');
  const [genre, setGenre] = useState('');

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  }

  const handleYearInput = (e) => {
    setYear(e.target.value);
  }

  const handleDeveloperInput = (e) => {
    setDeveloper(e.target.value);
  }

  const handleGenreInput = (e) => {
    setGenre(e.target.value);
  }
  
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
