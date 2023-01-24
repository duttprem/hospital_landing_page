import React from 'react'
import './CardProfile.css'
const CardProfile = ({name,profession}) => {
  return (
    <div className="Profile">
      <div className="image"></div>
      <div className='profileDetails'>
        <h2>{name}</h2>
        <h3>{profession}</h3>
      </div>
    </div>
  );
}

export default CardProfile;
