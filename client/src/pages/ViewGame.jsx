import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

function ViewGame() {
  const navigate = useNavigate();
  const gameId = useParams();

  useEffect(() => {
    console.log(gameId);
  }, []);

  return (
    <div>
      <Header text="" />
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
