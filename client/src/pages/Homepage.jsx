import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Button from '../components/Button';
import '../styles/Homepage.css';

function Homepage() {
  
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  
  const handleGameList = useCallback(async () => {
    const gameList = await axios.get('api/games/')
    .then((result) => result.data)
    .catch((err) => console.log("ERROR: ", err))
    setGames(gameList);
  }, []);
  
  useEffect(() => {
    handleGameList();
  }, [handleGameList]);

  const handleDeletion = async (event) => {
    event.preventDefault();
    const gameId = event.target.parentElement.dataset.gameId;
    await axios.delete(`/api/games/${gameId}/deletion/`)
      .then(result => console.log(result.data))
      .catch(error => console.log(error))
  }

  return (
    <div className='homepage'>
      <Header
        text="My Favorite Video Games" />
      
      <Button 
        className='button add__game'
        text="Add a New Game!"
        onClick={() => navigate('/submission')}
      />

      <div className='gamelist'>
        {(games.length >= 1)
          ? games.map((game) => (
            <div className='game'
                 key={game.id}
                 data-game-id={game.id}>
              <Card
                title={game.title}
                developer={game.developer}
                year={game.release_year}
                genre={game.genre} />
              <Button 
                className='delete__button'
                text="Delete"
                onClick={ handleDeletion }/>
              <Button 
                className='edit__button'
                text="Edit" 
                onClick={() => navigate(`/${game.id}/edit`)}/>
            </div>
          ))
          : 'Loading...'
        }
      </div>
      
      <Footer />
    </div>
  )
}

export default Homepage;