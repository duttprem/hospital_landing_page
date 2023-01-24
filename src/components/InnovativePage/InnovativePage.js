import React from "react";
import Card from "../../UI/Card/Card";
import "./InnovativePage.css";
import doctormen from "../../assets/doctor-men.svg";
import ambulance from "../../assets/ambulance.svg";
import doctorWoman from "../../assets/doctor-woman.svg";
const data = [
  { img: doctorWoman, id: 1, title: "Qualified Doctors" },
  { img: doctormen, id: 2, title: "Emergency Care" },
  { img: ambulance, id: 3, title: "24 Hours Service" },
];
const InnovativePage = () => {
  return (
    <div className="innovativeContainer">
      <div className="wrapper">
        <div className="textClass">
          <h1>Clinic With Innovative</h1>
          <p>
            We provide the most full medical services, so every person could{" "}
            <br /> heave the oppurtunity to receive qualitative medical help.
          </p>
          <button>Learn More</button>
        </div>
        <div className="Card">
          {data.map((item) => (
            <Card key={item.id} img={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InnovativePage;
