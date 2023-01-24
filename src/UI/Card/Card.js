import React from "react";
import "./Card.css";


const Card = ({ img, title }) => {
  return (
    <div className="cardInnovate">
      <img src={img} alt="qualied doctors" />
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
