import React from "react";
import StartedImg from "../../images/Trynow1.svg";
import { Button } from "react-bootstrap";
const GetStarted = () => {
  return (
    <div className="developer-get-started">
      <div className="container">
        <div className="get-started-content">
          <div className="get-started">
            <h3>Get started right now!</h3>
            <p>
              Create a developer account, get your credentials, and set up
              sandbox accounts for testing. We'll guide you thorugh the steps to
              become a Curriki developer.
            </p>
            <button> GET STARTED</button>
          </div>
          <img className="get-start-img" src={StartedImg} alt="starter image" />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
