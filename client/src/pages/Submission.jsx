import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from '../components/Button';

function Submission() {
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

  const handleSubmit = async () => {
    const newGame = {
      title: title,
      release_year: year,
      developer: developer,
      genre: genre
    }

    await axios.post('api/games/addNewGame/', newGame)
      .then(response => response.data)
      .catch(error => console.log("ERROR: ", error));
  }

  return (
    <div className='homepage'>
      <Header 
        text="Submit Game Information" />
      
      <div className="form">
        <form
          onSubmit = { handleSubmit } >

          <label>
            { "Game Title:" }
            <Input
              placeholder="Enter game title"
              onChange={ handleTitleInput } ></Input>
          </label>

          <label>
            { "Release Year:" }
            <Input
              placeholder="Enter release year"
              onChange={ handleYearInput } ></Input>
          </label>

          <label>
            { "Developer:" }
            <Input
              placeholder="Enter developer name"
              onChange={ handleDeveloperInput } ></Input>
          </label>

          <label>
            { "Genre:" }
            <Input
              placeholder="Enter game genre"
              onChange={ handleGenreInput } ></Input>
          </label>

          <Button 
            className="submission__button"
            type="submit"
            text="Submit"/>

        </form>
      </div>

      <Footer />
              
    </div>
  );
}

export default Submission;
