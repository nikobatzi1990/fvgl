import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Image from "../components/Image";

function ViewGame() {
  const navigate = useNavigate();
  const gameId = useParams();
  const [game, setGame] = useState({});

  const fetchGame = useCallback(async () => {
    try {
      const { data } = await axios.get(`/api/games/game/${gameId.game}`);
      setGame(data);
    } catch (err) {
      console.log("ERROR: ", err);
    }
  }, []);

  useEffect(() => {
    fetchGame();
    console.log("Fetching game with ID:", game);
  }, [fetchGame]);

  return (
    <div className="container-fluid">
      <Header text={game.title} />
      <div className=" p-5 d-flex gap-5">
        <Image imageUrl={game.image_url} />
        <div className="d-flex flex-column">
          <p>{game.developer}</p>
          <p>{game.release_year}</p>
          <p>{game.genre}</p>
        </div>
      </div>
      <Button
        className="btn btn-regular align-self-start"
        onClick={() => navigate("/")}
        text="Back to Homepage"
      />
      <Footer />
    </div>
  );
}

export default ViewGame;
