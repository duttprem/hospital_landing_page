import "./NavBarPage.css";
import Title from "../../assets/MediCare+.svg";
import OvalHalf from "../../assets/OvalHalf.svg";
import OvalFull from "../../assets/OvalFull.svg";
import { Fragment } from "react";
const NavBarPage = () => {
  return (
    <Fragment>
      <nav className="header">
        <div className="container">
          <div className="headBar">
            <img className="title" src={Title} alt="MediCare+ Title" />
            <img
              className="OvalhalfLeft"
              src={OvalHalf}
              alt="OverHalf Circle"
            />
          </div>
          <div className="navBar">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>News</li>
            <button>Contact</button>
          </div>
        </div>
        <div className="circle">
          <img className="OvalFullRight" src={OvalFull} alt="OvalFull Circle" />
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBarPage;
