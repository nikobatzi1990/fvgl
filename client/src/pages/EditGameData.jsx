import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";
import SubmitButton from "../components/SubmitButton";

function EditGameData() {
  const navigate = useNavigate();
  const { game: gameId } = useParams();
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [developer, setDeveloper] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const res = await axios.get(`/api/games/game/${gameId}/`);
        const game = res.data;

        setTitle(game.title || "");
        setYear(game.release_year || "");
        setDeveloper(game.developer || "");
        setComment(game.comment || "");
        setGenre(game.genre ? game.genre.join(", ") : "");
      } catch (err) {
        console.log("ERROR fetching game:", err);
      }
    };

    fetchGame();
  }, [gameId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const genreList = genre
      .split(",")
      .map((g) => g.trim())
      .filter((g) => g.length > 0);

    const editedGame = new FormData();
    editedGame.append("title", title);
    editedGame.append("release_year", year);
    editedGame.append("developer", developer);
    editedGame.append("comment", comment);
    genreList.forEach((g) => editedGame.append("genre", g));
    if (image && image.name) {
      editedGame.append("image_url", image);
    }

    try {
      await axios.patch(`/api/games/${gameId}/edit/`, editedGame, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (err) {
      console.log("ERROR submitting edit:", err);
    }
  };

  return (
    <div className="container-fluid d-flex flex-column">
      <Header text="Edit Game" />

      <div className="row col-4 my-5 align-self-center">
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label htmlFor="game__release" className="form-label">
            Release Year:
            <Input
              id="game__release"
              type="text"
              className="form-control"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </label>

          <label htmlFor="game__developer" className="form-label">
            Developer:
            <Input
              id="game__developer"
              type="text"
              className="form-control"
              value={developer}
              onChange={(e) => setDeveloper(e.target.value)}
            />
          </label>

          <label htmlFor="game__genre" className="form-label">
            Genre:
            <Input
              id="game__genre"
              type="text"
              className="form-control"
              value={genre}
              placeholder="Separate multiple genres with commas"
              onChange={(e) => setGenre(e.target.value)}
            />
          </label>

          <label htmlFor="game__image" className="form-label">
            Image:
            <Input
              id="game__image"
              type="file"
              className="form-control"
              accept="image/png, image/jpeg"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>

          <label htmlFor="game__comment" className="form-label">
            Comment:
            <textarea
              id="game__comment"
              className="form-control"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </label>

          <SubmitButton className="btn btn-regular" />
        </form>
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

export default EditGameData;
