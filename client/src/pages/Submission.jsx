import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from '../components/Button';
import '../styles/Submission.css';

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
    <div className='submission'>
      <Header 
        text="Submit Game Information" />
      
      <div >
        <form 
          className="form" 
          onSubmit = { handleSubmit } >

          <label className="label">
            { "Game Title:" }
            <Input
              className="input"
              placeholder="Enter game title"
              onChange={ handleTitleInput } ></Input>
          </label>

          <label className="label">
            { "Release Year:" }
            <Input
              className="input"
              placeholder="Enter release year"
              onChange={ handleYearInput } ></Input>
          </label>

          <label className="label">
            { "Developer:" }
            <Input
              className="input"
              placeholder="Enter developer name"
              onChange={ handleDeveloperInput } ></Input>
          </label>

          <label className="label">
            { "Genre:" }
            <Input
              className="input"
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
