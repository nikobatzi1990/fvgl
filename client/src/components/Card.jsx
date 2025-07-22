import React from "react";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import Image from "./Image";

function Card(props) {
  const { id, title, developer, year, genre, imageUrl, refreshList } = props;
  return (
    <div className="card mb-5">
      <Image imageUrl={imageUrl} />
      <div className="card-body">
        <h5 className="card-title">
          <a
            href={`/${id}`}
            className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            {title}
          </a>
        </h5>
        <p className="card-text">{developer}</p>
        <p className="card-text">{year}</p>
        <p className="card-text">{genre}</p>
        <div
          className="btn-group d-flex"
          role="group"
          aria-label="delete and edit buttons"
        >
          <DeleteButton refreshList={refreshList} />
          <EditButton />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  developer: PropTypes.string,
  year: PropTypes.number.isRequired,
  genre: PropTypes.string,
  imageUrl: PropTypes.string,
  refreshList: PropTypes.func.isRequired,
};

Card.defaultProps = {
  developer: "",
  genre: "",
  imageUrl: "",
};

export default Card;
