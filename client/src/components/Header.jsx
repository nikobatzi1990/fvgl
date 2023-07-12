import React from 'react';
import '../styles/Header.css';

const Header = (props) => {
  const { className, text } = props;
   
  return (
    <h1
    className = { className } >
      { text}
    </h1>
  )
}

export default Header;