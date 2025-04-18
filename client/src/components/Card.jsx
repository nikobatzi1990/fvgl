import React from "react";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

function Card(props) {
  const { title, developer, year, genre, imageUrl } = props;
  return (
    <div className="card">
      <img src={imageUrl} alt="video game" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{developer}</p>
        <p className="card-text">{year}</p>
        <p className="card-text">{genre}</p>
      </div>
      <DeleteButton />
      <EditButton />
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  developer: PropTypes.string,
  year: PropTypes.number.isRequired,
  genre: PropTypes.string,
  imageUrl: PropTypes.string,
};

Card.defaultProps = {
  developer: "",
  genre: "",
  imageUrl: "",
};

export default Card;
