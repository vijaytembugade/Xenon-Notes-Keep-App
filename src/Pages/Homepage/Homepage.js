import React from "react";

import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <div className="flex-container-verticle homepage-heading">
          <div className="heading-small gray-text">CREATE</div>
          <div className="heading-large primary-text">NOTES OF YOUR CHOICE</div>
          <div className="heading-small gray-text">EFFORTLESSLY !</div>
        </div>

        <div className="flex-container-verticle homepage-image">
          <div className="flex-container-verticle">
            <button className="btn btn-success start-now ">
              Click here to get started!
            </button>
          </div>
          <img className="responsive-img" src="/assets/GIF/Note.gif" alt="" />

          <p className="homepage-text">
            Create beutiful notes effordlessly with{" "}
            <strong>
              k<span className="warning-text">X</span>eep
            </strong>
            !
          </p>
        </div>

        <div className="flex-container homepage-desc-images">
          <img src="/assets/Homepage/keypoints.svg" alt="" />
          <img src="/assets/Homepage/Calender.svg" alt="" />
          <img src="/assets/Homepage/taking-notes.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Homepage;
