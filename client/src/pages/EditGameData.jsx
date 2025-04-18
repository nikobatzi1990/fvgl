import React, { useCallback, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";
import SubmitButton from "../components/SubmitButton";

function EditGameData() {
  const navigate = useNavigate();
  const gameId = useParams();
  const [game, setGame] = useState({});
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [developer, setDeveloper] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState({});

  const handleGameData = useCallback(async () => {
    const gameData = await axios
      .get(`/api/games/game/${gameId.game}/`)
      .then((result) => result.data)
      .catch((err) => console.log("ERROR: ", err));
    setGame(gameData);
  }, []);

  useEffect(() => {
    handleGameData();
  }, [handleGameData]);

  useEffect(() => {
    setTitle(game.title);
    setYear(game.release_year);
    setDeveloper(game.developer);
    setGenre(game.genre);
  }, [game]);

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

    const editedGame = new FormData();
    editedGame.append("title", title);
    editedGame.append("release_year", year);
    editedGame.append("developer", developer);
    editedGame.append("genre", genre);
    if (image && image.name) {
      editedGame.append("image_url", image);
    }
    try {
      await axios.patch(`/api/games/${gameId.game}/edit/`, editedGame, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (err) {
      console.log("ERROR: ", err);
    }
    navigate("/");
  };

  return (
    <div className="container d-flex flex-column">
      <Header text="Edit Game" />

      <div className="row col-4 my-4 align-self-center">
        <form
          className="d-flex flex-column align-self-center gap-2"
          encType="multipart/form-data"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <label htmlFor="game__title" className="form-label">
            Game Title:
            <Input
              id="game__title"
              type="text"
              className="form-control"
              placeholder={title}
              onChange={handleTitleInput}
            />
          </label>

          <label htmlFor="game__release" className="form-label">
            Release Year:
            <Input
              id="game__release"
              type="text"
              className="form-control"
              placeholder={year}
              onChange={handleYearInput}
            />
          </label>

          <label htmlFor="game__developer" className="form-label">
            Developer:
            <Input
              id="game__developer"
              type="text"
              className="form-control"
              placeholder={developer}
              onChange={handleDeveloperInput}
            />
          </label>

          <label htmlFor="game__genre" className="form-label">
            Genre:
            <Input
              id="game__genre"
              type="text"
              className="form-control"
              placeholder={genre}
              onChange={handleGenreInput}
            />
          </label>

          <label htmlFor="game__image" className="form-label">
            Image:
            <Input
              id="game__image"
              type="file"
              className="form-control"
              accept="image/png, image/jpeg"
              onChange={handleImageInput}
            />
          </label>

          <SubmitButton className="btn" />
        </form>
      </div>

      <Button
        className="btn align-self-start"
        onClick={() => navigate("/")}
        text="Back to Homepage"
      />

      <Footer />
    </div>
  );
}

export default EditGameData;
