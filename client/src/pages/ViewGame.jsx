import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

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
    console.log("🕹️", game);
  }, [fetchGame]);

  return (
    <div>
      <Header text={game.title} />
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
