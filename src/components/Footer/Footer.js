import React from "react";
import './Footer.css';
import facebook from '../../assets/fb.svg';
import twitter from '../../assets/twitter.svg';
import google from "../../assets/google.svg";
const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="navbar">
          <h2>
            Medi<span>Care+</span>
          </h2>
          <div className="navbar_list">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>News</li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footerIcon">
          <img src={facebook} alt="facebook icon" />
          <img src={google} alt="google icon" />
          <img src={twitter} alt="twitter icon" />
          <p>©2020 PodPayment - 2020</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
