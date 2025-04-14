import React from "react";
import PropTypes from "prop-types";
import "../styles/Header.css";

function Header(props) {
  const { text } = props;

  return (
    <header className="header">
      <h1>{text}</h1>
    </header>
  );
};

Header.PropTypes = {
  text: PropTypes.string.isRequired
}

export default Header;
