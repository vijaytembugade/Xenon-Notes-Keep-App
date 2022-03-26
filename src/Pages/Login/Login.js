import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../Components/LoginForm/LoginForm";
import Logo from "../../Components/Logo/Logo";
import "./Login.css";

const Login = () => {
  return (
    <div className="flex-container-verticle login-container">
      <Logo />

      <div className="title">
        Keep your <span className="primary-text">notes</span> tied like
        <span className="secondary-text"> knots</span> !
      </div>
      <LoginForm />
      <strong>
        Create new Account?{" "}
        <Link to="/signup" className="secondary-text">
          {" "}
          Signup{" "}
        </Link>
      </strong>
    </div>
  );
};

export default Login;
