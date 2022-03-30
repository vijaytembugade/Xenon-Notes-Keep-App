import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../Contexts";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

function Header() {
  const {
    authState: { isLoggedIn },
  } = useAuth();

  const navMenuForbiddenPaths = ["/", "/login", "/signup"];

  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <>
      <nav className="text-dark ">
        <div className="nav-brand">
          <img className="logo" src="/logo.png" alt="Xenon" />
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {!navMenuForbiddenPaths.includes(pathname) && (
          <div className="searchbar">
            <SearchBar />
          </div>
        )}

        <ul className="nav-menu">
          {isLoggedIn && (
            <li>
              <NavLink to="/notes" className="nav-item">
                <span class="material-icons md-24">text_snippet</span>
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to="/user-details" className="nav-item">
                <span className="material-icons md-24 ">account_circle</span>
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

        {/* <div id="hamburger" className="hamburger">
          <span className="material-icons md-36"> menu </span>
        </div> */}

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
