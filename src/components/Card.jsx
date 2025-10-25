import React from 'react';
import Button from './Button';

const Card = ({ image, title, text, buttonText, onButtonClick }) => {
  return (
    <div className="card shadow-sm h-100">
      {image && <img src={image} className="card-img-top" alt={title} />}
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text">{text}</p>
        {buttonText && <Button text={buttonText} onClick={onButtonClick} />}
      </div>
    </div>
  );
};

export default Card;
