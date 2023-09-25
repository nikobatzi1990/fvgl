import React from 'react';
import '../styles/Header.css';

const Header = (props) => {
  const { text } = props;
   
  return (
    <header className='header'>
      <h1>{ text}</h1>
    </header>
  )
}

export default Header;