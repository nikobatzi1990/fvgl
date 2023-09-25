import React from 'react';
import '../styles/Header.css';

const Header = (props) => {
  const { className, text } = props;
   
  return (
    <header className='header'>
      <h1
      className = { className } >
        { text}
      </h1>
    </header>
  )
}

export default Header;