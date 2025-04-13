import React from 'react';
import '../styles/Card.css';

const Card = (props) => {
  const { className, title, developer, year, genre, image_url } = props;
  return (
    <div className={ className } >
      <h2>{ title }</h2>
      <div className='game__data'>
        <div>
          <p>{ developer }</p>
          <p>{ year }</p>
          <p>{ genre }</p>
        </div>
        <div>
          <img src={ image_url }
          alt="video game"
          height="150px" width="150px"/>
        </div>
      </div>
    </div>
  )
}

export default Card;