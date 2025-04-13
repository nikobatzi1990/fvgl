import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from '../components/Button';
import '../styles/Submission.css';

function Submission() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [developer, setDeveloper] = useState('');
  const [genre, setGenre] = useState('');
  const [image, setImage] = useState('');

    useEffect(() => {
      console.log('❤️', image)
    }, [image]);
  
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

  const handleImageInput = (e) => {
    setImage(e.target.value);
  }

  const handleSubmit = async () => {
    const newGame = {
      title: title,
      release_year: year,
      developer: developer,
      genre: genre,
      image_url: image
    }

    await axios.post('api/games/addNewGame/', newGame)
      .then(response => response.data)
      .catch(error => console.log("ERROR: ", error));
  }

  return (
    <div className='submission'>
      <Header 
        text="New Game"/>
      
      <div>
        <form className="form" onSubmit = { handleSubmit }>
          <div>
            <label htmlFor="game__title" className="label">{ "Game Title:" }</label>
            <Input
              id="game__title"
              type="text"
              className="input"
              placeholder="Enter game title"
              onChange={ handleTitleInput }/>
          </div>
          <div>
            <label htmlFor="game__release" className="label">{ "Release Year:" }</label>
            <Input
              id="game__release"
              type="text"
              className="input"
              placeholder="Enter release year"
              onChange={ handleYearInput }/>
          </div>
          <div>  
            <label htmlFor="game__developer" className="label">{ "Developer:" }</label>
            <Input
              id="game__developer"
              type="text"
              className="input"
              placeholder="Enter developer name"
              onChange={ handleDeveloperInput }/>
          </div>
          <div>  
            <label htmlFor="game__genre" className="label">{ "Genre:" }</label>
            <Input
              id="game__genre"
              type="text"
              className="input"
              placeholder="Enter game genre"
              onChange={ handleGenreInput }/>
          </div>

          <div>  
            <label htmlFor="game__image" className="label">{ "Image:" }</label>
            <Input
              id="game__image"
              type="file"
              accept="image/png, image/jpeg"
              className="input"
              onChange={ handleImageInput }
              />
          </div>

          <Button 
            className="submission__button button"
            type="submit"
            text="Submit"/>
        </form>

        <Button 
          className="back__button button"
          onClick={() => navigate('/')}
          text="Back to Homepage"/>
      </div>

      <Footer />
              
    </div>
  );
}

export default Submission;
