import React from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

function ViewGame() {
  const navigate = useNavigate();
  // const gameId = useParams();

  return (
    <div>
      <Header text="New Game" />
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
