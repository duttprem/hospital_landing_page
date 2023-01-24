import "./LandingPage.css";
import Rectangle from "../../../assets/Rectangle.svg";
import { Fragment } from "react";
const LandingPage = () => {
  return (
    <Fragment>
      <div className="pageDetail">
        <div className="container">
          <div className="pageLeft">
            <h2>Welcome to MediCare+ Clinic</h2>
            <h1>Best Specialists</h1>
            <p>
              We are on the leading edge of cancer care. Providing the full{" "}
              <br />
              continuum of cancer treatments and supportive care services in a
              <br />
              single convenient location.
            </p>
            <div className="btn">
              <button>Make an Appointment</button>

              <button>Departments</button>
            </div>
          </div>
          <div className="pageRight">
            <img src={Rectangle} alt="Rectangle Frame" />
          </div>
        </div>
      </div>
      
    </Fragment>
  );
};

export default LandingPage;
