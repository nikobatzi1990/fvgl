import React, { useState } from 'react';
import axios from 'axios';
import Input from './Input';


function App() {
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

  const submit = async () => {
    const newGame = {
      title: title,
      release_year: year,
      developer: developer,
      genre: genre
    }
    await axios.post('submission/', newGame)
      .then(response => response.data)
      .catch(error => console.log("ERROR: ", error));
  }
  
  return (
    <div className="App">
      <Input
        labelName="Title"
        placeholder="Enter game title"
        onChange={ handleTitleInput } ></Input>

      <Input
        labelName="Year"
        placeholder="Enter release year"
        onChange={ handleYearInput } ></Input>

      <Input
        labelName="Developer"
        placeholder="Enter developer name"
        onChange={ handleDeveloperInput } ></Input>

      <Input
        labelName="Genre"
        placeholder="Enter game genre"
        onChange={ handleGenreInput } ></Input>

      <button className="submit" onClick={ submit }>Submit</button>
    </div>
  );
}

export default App;
