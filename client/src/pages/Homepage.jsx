import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Homepage() {
  useEffect(() => {
    handleGameList();
    // console.log('🎮', games);
  }, []);

  const navigate = useNavigate();
  const [games, setGames] = useState([]);

  const handleGameList = async () => {
    const gameList = await axios.get('api/games/')
      .then((result) => result.data)
      .catch((err) => console.log("ERROR: ", err))
    console.log('🎲', gameList);
  }

  return (
    <>
      <Header
        text="Homepage" />
      <div>


      </div>
      
      <Footer />
    </>
  )
}

export default Homepage;