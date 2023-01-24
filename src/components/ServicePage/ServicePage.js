import React from "react";
import "./ServicePage.css";
import arrow from "../../assets/arrow.svg";
const ServicePage = () => {
  return (
    <div className="Servicecontainer">
      <div className="text">
        <h1>Our Services</h1>
        <p>
          We provide the most full medical services, so every person could{" "}
          <br />
          heave the oppurtunity to receive qualitative medical help.
        </p>
      </div>
      <div className="cardIcon">
        <div className="card">
          {/* <img src={tooth} alt="Dental Care image" /> */}
          <span className="icon-tooth"></span>
          <h2>Dental care</h2>
          <div className="cardTitle">
            <p>LEARN MORE</p>
            <img className="arrow" src={arrow} alt="arrow icon" />
          </div>
        </div>
        <div className="card">
          {/* <img src={lungs} alt="lungs image" /> */}
          <span className="icon-lungs"></span>
          <h2>Pulmonary</h2>
          <div className="cardTitle">
            <p>LEARN MORE</p>
            <img className="arrow" src={arrow} alt="arrow icon" />
          </div>
        </div>
        <div className="card">
          {/* <img src={humanbrain} alt="humanbrain image" /> */}
          <span className="icon-human-brain"></span>
          <h2>Neurological</h2>
          <div className="cardTitle">
            <p>LEARN MORE</p>
            <img className="arrow" src={arrow} alt="arrow icon" />
          </div>
           </div>
          <div className="card">
            {/* <img src={medicalfile} alt="medicalfile image" /> */}
            <span className="icon-medical-file"></span>
            <h2>Prediatrics</h2>
            <div className="cardTitle">
              <p>LEARN MORE</p>
              <img className="arrow" src={arrow} alt="arrow icon" />
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default ServicePage;
