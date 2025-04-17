import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  const { className, title, developer, year, genre, imageUrl } = props;
  return (
    <div className={className}>
      <h2>{title}</h2>
      <div className="game__data">
        <div>
          <p>{developer}</p>
          <p>{year}</p>
          <p>{genre}</p>
        </div>
        <div>
          <img src={imageUrl} alt="video game" height="150px" width="150px" />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  developer: PropTypes.string,
  year: PropTypes.number.isRequired,
  genre: PropTypes.string,
  imageUrl: PropTypes.string,
};

Card.defaultProps = {
  className: "",
  developer: "",
  genre: "",
  imageUrl: "",
};

export default Card;
