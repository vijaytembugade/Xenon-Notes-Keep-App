import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../Contexts";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

function Header() {
  const {
    authState: { isLoggedIn, user },
  } = useAuth();

  return (
    <>
      <nav className="text-dark ">
        <Link to="/">
          <div className="nav-brand gray-bg-color">
            <img className="logo" src="/logo.png" alt="Xenon" />
            <Logo />
          </div>
        </Link>

        <div className="searchbar">
          <SearchBar />
        </div>

        <ul className="nav-menu">
          {isLoggedIn && (
            <li>
              <NavLink to="/user-details" className="nav-item">
                <span className="material-icons md-36 ">account_circle</span>
              </NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink to="/login" className="nav-item">
                <button className="btn btn-small btn-primary">Login</button>
              </NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink to="/signup" className="nav-item">
                <button className="btn btn-small btn-secondary-outline">
                  Signup
                </button>
              </NavLink>
            </li>
          )}
        </ul>

        <div id="hamburger" className="hamburger">
          <span className="material-icons md-36"> menu </span>
        </div>

        {/* <div className="responsive-navbar display-navbar">
          <div id="closeNavbar" className="danger-text">
            <span className="material-icons md-36"> close </span>
            Close
          </div>
          <a href="" className="nav-item">
            {" "}
            Home{" "}
          </a>
          <a href="" className="nav-item">
            About
          </a>
          <a href="" className="nav-item">
            Settings
          </a>
          <a href="" className="nav-item">
            Contact
          </a>
          <a href="" className="nav-item">
            <img
              className="avatar-sm"
              src="https://miro.medium.com/fit/c/262/262/1*MFLNc70kh8oLPUsDaUH4sg.jpeg"
            />
          </a>
        </div> */}
      </nav>
    </>
  );
}

export default Header;
