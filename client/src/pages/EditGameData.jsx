import React, { useCallback, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from '../components/Button';

function EditGameData () {

  const gameId = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    console.log(gameId);
  }, []);

  const handleGameData = useCallback(async () => {
    const gameData = await axios.get(`/api/games/game/${gameId.game}/`)
    .then((result) => result.data)
    .catch((err) => console.log("ERROR: ", err))
    console.log('🥰', gameData);
    setGame(gameData);
  }, []);

  useEffect(() => {
    handleGameData();
    console.log('😶‍🌫️', game)
  }, []);
  return (
    <>
      <Header
          text="Edit Game Data" />

      <Footer />
    </>
  )
}

export default EditGameData;