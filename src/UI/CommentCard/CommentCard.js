import React from 'react'
import './CommentCard.css'

const CommentCard = ({icon, img,name, type}) => {
  return (
    <div className="commentCard">
      <img className="commentIcon" src={icon} alt="Comment Icon" />
      <div className="wrapperComment">
        <div className="commentTitle">
          <p>
            I wanted to thanks everyone at this facility for the <br /> quality of care
            and compassion they showed during <br /> my stay.
          </p>
        </div>
        <div className="patientDetail">
          <img src={img} alt="Patient Image" />
          <div className="patientProfile">
            <h2>{name}</h2>
            <p>{type}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
