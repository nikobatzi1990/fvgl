import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  const { text } = props;

  return (
    <header className="row header">
      <h1 className="d-flex justify-content-center align-items-center">
        {text}
      </h1>
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
