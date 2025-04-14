import React from "react";
import PropTypes from "prop-types";

function Button({ className = "", onClick, text, type = "button" }) {
  return (
    <button className={className} onClick={onClick} type={type}>
      {text}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
