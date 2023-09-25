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

  const handleSubmit = async () => {
    const editedGame = {
      title: title,
      release_year: year,
      developer: developer,
      genre: genre
    }
    await axios.patch(`/api/games/${gameId.game}/edit/`, editedGame);
  }

  return (
    <>
      <Header
          text="Edit Game Data" />

<div className="form">
        <form
          onSubmit = { handleSubmit } >

          <label>
            { "Game Title:" }
            <Input
              placeholder={ title }
              onChange={ handleTitleInput } ></Input>
          </label>

          <label>
            { "Release Year:" }
            <Input
              placeholder={ year }
              onChange={ handleYearInput } ></Input>
          </label>

          <label>
            { "Developer:" }
            <Input
              placeholder={ developer }
              onChange={ handleDeveloperInput } ></Input>
          </label>

          <label>
            { "Genre:" }
            <Input
              placeholder={ genre }
              onChange={ handleGenreInput } ></Input>
          </label>

          <Button 
            className="submission__button"
            type="submit"
            text="Submit" />
        </form>

        <Button 
          onClick={() => navigate('/')}
          text="Back to Homepage"/>
      </div>

      <Footer />
    </>
  )
}

export default EditGameData;