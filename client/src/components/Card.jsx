import React from 'react';
import '../styles/Card.css';

const Card = (props) => {
  const { title, developer, year, genre } = props;
  return (
    <div>
      <h1>{ title }</h1>
      <p>{developer }</p>
      <p>{ year }</p>
      <p>{ genre }</p>
    </div>
  )
}

export default Card;