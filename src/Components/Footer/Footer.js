import React from "react";
import Logo from "../Logo/Logo";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="flex-container footer-container">
      <div className="flex-container">
        <img className="logo" src="/logo.png" alt="kXeep" />
        <Logo />
      </div>
      <div className="flex-container-verticle">
        <strong className="gray-text">
          Made with <span className="warning-text">&lt;/&gt;</span> by
          <span className="secondary-text"> Vijay Tembugade</span>
        </strong>
        <div className="gray-text ">&copy; Xenon 2022 </div>
        <div className="social-media-icons">
          <span>
            <a
              href="https://github.com/vijaytembugade"
              rel="noreferrer"
              target="_blank"
            >
              <img src="/assets/github.svg" alt="github" />
            </a>
          </span>
          <span>
            <a
              href="https://linkedin.com/in/vijaytembugade"
              rel="noreferrer"
              target="_blank"
            >
              <img src="/assets/linkedin.svg" alt="linkedin" />
            </a>
          </span>
          <span>
            <a
              href="https://twitter.com/vijaytembugade"
              rel="noreferrer"
              target="_blank"
            >
              <img src="/assets/twitter.svg" alt="twitter" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
