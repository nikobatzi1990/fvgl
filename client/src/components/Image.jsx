import React from "react";
import PropTypes from "prop-types";

function Image(props) {
  const { imageUrl } = props;

  return (
    <div>
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
    </div>
  );
}

Image.propTypes = {
  imageUrl: PropTypes.string,
};

Image.defaultProps = {
  imageUrl: "",
};

export default Image;
