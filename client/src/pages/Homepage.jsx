import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

function Homepage() {
  
  const [games, setGames] = useState([]);
  
  const handleGameList = useCallback(async () => {
    const gameList = await axios.get('api/games/')
    .then((result) => result.data)
    .catch((err) => console.log("ERROR: ", err))
    console.log('🎲', gameList);
    setGames(gameList);
  }, []);
  
  useEffect(() => {
    handleGameList();
    console.log('🎮', games);
  }, [handleGameList]);

  return (
    <>
      <Header
        text="Homepage" />
      <div>
        {(games.length >= 1)
          ? games.map((game) => (
            <Card
              key = {game.title}
              title={game.title}
              developer={game.developer}
              year={game.release_year}
              genre={game.genre}
            />
          ))
          : 'Loading...'
        }

      </div>
      
      <Footer />
    </>
  )
}

export default Homepage;