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
  }, [fetchGame]);

  return (
    <div className="container-fluid">
      <Header text={game.title} />
      <div className=" p-5 d-flex gap-5">
        <Image imageUrl={game.image_url} />
        <div className="d-flex flex-column">
          <div className="mt-3">
            <h5 className="h5">Game Info:</h5>
            <p>{game.developer}</p>
            <p>{game.release_year}</p>
            <p>{game.genre}</p>
          </div>
          <div className="mt-3">
            <h5 className="h5">Comments:</h5>
            <p>{game.comment}</p>
          </div>
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
