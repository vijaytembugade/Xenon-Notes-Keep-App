import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../../Constants";
import { useAuth } from "../../Contexts";
import Loader from "../Loader/Loader";

const SignupForm = () => {
  const navigate = useNavigate();
  const {
    authState: { loading },
    authDispatch,
  } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, password, confirmPassword } = user;

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      if (
        email === "" ||
        password === "" ||
        confirmPassword === "" ||
        password !== confirmPassword
      ) {
        throw new Error("Invalid Credentials");
      } else {
        authDispatch({ type: SIGNUP_REQUEST });
        const responce = await axios.post("/api/auth/signup", {
          email,
          password,
        });

        console.log(responce);
        localStorage.setItem("AUTH_TOKEN", responce.data.encodedToken);
        localStorage.setItem("AUTH_USER", responce.data.createdUser.email);
        authDispatch({
          type: SIGNUP_SUCCESS,
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      authDispatch({
        type: SIGNUP_FAIL,
        payload: error,
      });
    }
  };
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <form className="form-group " onSubmit={handleSignUp}>
          <h2>Sign in</h2>

          <label>
            <span className="input-label"> Email </span>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </label>

          <label>
            <span className="input-label"> Password </span>
            <input
              required
              minLength="5"
              type="password"
              value={password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </label>
          <label>
            <span className="input-label"> Confirm Password </span>
            <input
              minLength="5"
              type="password"
              value={confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
            />
          </label>
          <span className="validation-error"></span>
          <button className="btn btn-secondary-outline">Sign In</button>
        </form>
      )}
    </>
  );
};

export default SignupForm;
