import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Components/Logo/Logo";
import SignupForm from "../../Components/SignupForm/SignupForm";
import "./Signup.css";

function Signup() {
  return (
    <div className="flex-container-verticle login-container">
      <Logo />
      <div className="title">Signup to Manage your daily tasks!</div>
      <SignupForm />
      <strong>
        Already have an account?
        <Link to="/login" className="primary-text">
          {" "}
          Login
        </Link>
      </strong>
    </div>
  );
}

export default Signup;
