import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Button from "../components/Button";

function Homepage() {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);

  const fetchGameList = useCallback(async () => {
    try {
      const { data } = await axios.get("/api/games/");
      setGames(data);
    } catch (err) {
      console.log("ERROR: ", err);
      setGames([]);
    }
  }, []);

  useEffect(() => {
    fetchGameList();
  }, [fetchGameList]);

  return (
    <div className="container">
      <Header text="My Favorite Video Games" />

      <Button
        className="btn btn-primary"
        text="Add a New Game!"
        onClick={() => navigate("/submission")}
      />

      <div className="row flex-row">
        {games.length >= 1
          ? games.map((game) => (
              <div className="m-5 col" key={game.id} data-game-id={game.id}>
                <Card
                  title={game.title}
                  developer={game.developer}
                  year={game.release_year}
                  genre={game.genre}
                  imageUrl={game.image_url}
                />
              </div>
            ))
          : "Loading..."}
      </div>

      <Footer />
    </div>
  );
}

export default Homepage;
