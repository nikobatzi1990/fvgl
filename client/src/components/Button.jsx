import React from "react";
import PropTypes from "prop-types";

function Button({ className = "", onClick, text = "" }) {
  return (
    <button className={className} onClick={onClick} type="button">
      {text}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default Button;
