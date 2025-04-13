import React, { useCallback, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from '../components/Button';

function EditGameData () {
  const navigate = useNavigate();
  const gameId = useParams();
  const [game, setGame] = useState({});
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [developer, setDeveloper] = useState('');
  const [genre, setGenre] = useState('');
   const [image, setImage] = useState({});

  const handleGameData = useCallback(async () => {
    const gameData = await axios.get(`/api/games/game/${gameId.game}/`)
    .then((result) => result.data)
    .catch((err) => console.log("ERROR: ", err))
    setGame(gameData);
  }, []);

  useEffect(() => {
    handleGameData();
  }, [handleGameData]);

  useEffect(() => {
    setTitle(game.title);
    setYear(game.release_year);
    setDeveloper(game.developer);
    setGenre(game.genre);
  }, [game]);

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
    setImage(e.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const editedGame = new FormData();
    editedGame.append('title', title);
    editedGame.append('release_year', year);
    editedGame.append('developer', developer);
    editedGame.append('genre', genre);
    editedGame.append('image_url', image);
    
    await axios.patch(`/api/games/${gameId.game}/edit/`, editedGame, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => response.data)
    .catch(error => console.log("ERROR: ", error.response?.data));;
  }

  return (
    <div className="submission">
      <Header
          text="Edit Game" />

      <div>
        <form
          className="form"
          onSubmit = { handleSubmit } >

          <label htmlFor="game__title" className="label">
            { "Game Title:" }
            <Input
              id="game__title"
              type="text"
              className="input"
              placeholder={ title }
              onChange={ handleTitleInput } ></Input>
          </label>

          <label htmlFor="game__release" className="label">
            { "Release Year:" }
            <Input
              id="game__release"
              type="text"
              className="input"
              placeholder={ year }
              onChange={ handleYearInput } ></Input>
          </label>

          <label htmlFor="game__developer" className="label">
            { "Developer:" }
            <Input
              id="game__developer"
              type="text"
              className="input"
              placeholder={ developer }
              onChange={ handleDeveloperInput } ></Input>
          </label>

          <label htmlFor="game__genre" className="label">
            { "Genre:" }
            <Input
              id="game__genre"
              type="text"
              className="input"
              placeholder={ genre }
              onChange={ handleGenreInput } ></Input>
          </label>

          <label htmlFor="game__image" className="label">
            { "Image:" }
            <Input
              id="game__image"
              type="file"
              accept="image/png, image/jpeg"
              className="input"
              onChange={ handleImageInput }
              />
            </label>

          <Button 
            className="submission__button button"
            type="submit"
            text="Submit" />
        </form>

        <Button 
          className="back__button button"
          onClick={() => navigate('/')}
          text="Back to Homepage"/>
      </div>

      <Footer />
    </div>
  )
}

export default EditGameData;