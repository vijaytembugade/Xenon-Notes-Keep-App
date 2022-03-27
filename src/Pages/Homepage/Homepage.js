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
      <div className="secondary-homepage-part">
        <div className="flex-container ">
          <div className="flex-container-verticle">
            <div className="idea-cards">CAPTURE IDEAS</div>
            <div className="idea-cards">MARKUP</div>
          </div>
          <img
            className="secondary-part-image"
            src="/assets/Homepage/processes.svg"
            alt=""
          />
          <div className="flex-container-verticle">
            <div className="idea-cards">MULTITASK</div>
            <div className="idea-cards">ORGANIZED</div>
          </div>
        </div>
        <div className="flex-container-verticle homepage-secondary-heading">
          <div className="heading-large  dark-text">
            FALL IN <span className="secondary-text">LOVE </span>
            WITH k<span className="ternary-text">X</span>EEP
          </div>
          <span className="secondary-tagline">
            Follow your daily routine and create new experience with k
            <span className="ternary-text">X</span>eep.
          </span>
        </div>
      </div>
    </>
  );
};

export default Homepage;