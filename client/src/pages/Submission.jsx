import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";
import SubmitButton from "../components/SubmitButton";

function Submission() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [developer, setDeveloper] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState({});

  useEffect(() => {
    console.log("❤️", image);
  }, [image]);

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleYearInput = (e) => {
    setYear(e.target.value);
  };

  const handleDeveloperInput = (e) => {
    setDeveloper(e.target.value);
  };

  const handleGenreInput = (e) => {
    setGenre(e.target.value);
  };

  const handleImageInput = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newGame = new FormData();
    newGame.append("title", title);
    newGame.append("release_year", year);
    newGame.append("developer", developer);
    newGame.append("genre", genre);
    newGame.append("image_url", image);

    await axios
      .post("api/games/addNewGame/", newGame, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => response.data)
      .catch((error) =>
        console.log("ERROR: ", error.response.data || error.message),
      );
  };

  return (
    <div className="container">
      <Header text="New Game" />

      <div className="row col-10">
        <form
          className="d-flex flex-column align-self-center"
          onSubmit={handleSubmit}
        >
          <label htmlFor="game__title" className="form-label">
            Game Title:
            <Input
              id="game__title"
              type="text"
              className="form-control"
              placeholder="Enter game title"
              onChange={handleTitleInput}
            />
          </label>

          <label htmlFor="game__release" className="form-label">
            Release Year:
            <Input
              id="game__release"
              type="text"
              className="form-control"
              placeholder="Enter release year"
              onChange={handleYearInput}
            />
          </label>

          <label htmlFor="game__developer" className="form-label">
            Developer:
            <Input
              id="game__developer"
              type="text"
              className="form-control"
              placeholder="Enter developer name"
              onChange={handleDeveloperInput}
            />
          </label>

          <label htmlFor="game__genre" className="form-label">
            Genre:
            <Input
              id="game__genre"
              type="text"
              className="form-control"
              placeholder="Enter game genre"
              onChange={handleGenreInput}
            />
          </label>

          <label htmlFor="game__image" className="form-label">
            Image:
            <Input
              id="game__image"
              type="file"
              accept="image/png, image/jpeg"
              className="form-control"
              onChange={handleImageInput}
            />
          </label>

          <SubmitButton className="btn" />
        </form>

        <Button
          className="btn"
          onClick={() => navigate("/")}
          text="Back to Homepage"
        />
      </div>

      <Footer />
    </div>
  );
}

export default Submission;
