import React from "react";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

function Card(props) {
  const { id, title, developer, year, genre, imageUrl, refreshList } = props;
  return (
    <div className="card mb-5">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="video game"
          className="card-img-top"
          // below styles were not applied when written in style.css
          // putting them here for now
          style={{ objectFit: "cover" }}
          height="320px"
        />
      ) : (
        <img
          src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1745035806/27002_ss0dyb.jpg"
          alt="default"
          className="card-img-top"
        />
      )}
      <div className="card-body">
        <h5 className="card-title">
          <a href={`/${id}`} className="text-decoration-none">
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
  id: PropTypes.string.isRequired,
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
