import React, { useState } from "react";
import { Link, matchPath, NavLink, useLocation } from "react-router-dom";
import { useAuth, useTheme } from "../../Contexts";
import Logo from "../Logo/Logo";
import ResponsiveSidebar from "../ResponsiveSidebar/ResponsiveSidebar";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);
  const {
    authState: { isLoggedIn },
  } = useAuth();

  const { theme, setTheme } = useTheme();

  const navMenuForbiddenPaths = ["/", "/login", "/signup"];

  const { pathname } = useLocation();

  return (
    <>
      <nav className="text-dark ">
        {matchPath("/notes/*", pathname) && (
          <div
            id="hamburger"
            className="hamburger"
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <span className="material-icons md-24">
              {" "}
              {!showNavbar ? "menu" : "close"}
            </span>
          </div>
        )}

        {showNavbar && <ResponsiveSidebar setShowNavbar={setShowNavbar} />}

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
          <li>
            {(theme === "" || theme === "light-mode") && (
              <span
                className=" material-icons md-24"
                onClick={() => setTheme("dark-mode")}
              >
                nightlight
              </span>
            )}
            {theme === "dark-mode" && (
              <span
                className="material-icons"
                onClick={() => setTheme("light-mode")}
              >
                light_mode
              </span>
            )}
          </li>

          {isLoggedIn && (
            <li>
              <NavLink to="/notes/all-notes" className="nav-item">
                <span className="material-icons md-24">text_snippet</span>
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
      </nav>
    </>
  );
}

export default Header;
