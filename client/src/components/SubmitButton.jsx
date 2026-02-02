import React from "react";
import PropTypes from "prop-types";

function SubmitButton({ className = "", text = "Submit" }) {
  return (
    <button className={className} type="submit">
      {text}
    </button>
  );
}

SubmitButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default SubmitButton;
