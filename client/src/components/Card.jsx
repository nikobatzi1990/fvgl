import React from 'react';
import '../styles/Card.css';

const Card = (props) => {
  const { className, title, developer, year, genre } = props;
  return (
    <div className="card">
      <div className={ className } >
        <h2>{ title }</h2>
        <p>{ developer }</p>
        <p>{ year }</p>
        <p>{ genre }</p>
      </div>
        <div className="image__div">Image Placeholder</div>
    </div>
  )
}

export default Card;