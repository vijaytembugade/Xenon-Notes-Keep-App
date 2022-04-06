import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../../Constants";
import { useAuth } from "../../Contexts";
import { loginService } from "../../Services";
import Loader from "../Loader/Loader";

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    authState: { loading },
    authDispatch,
  } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      if (email === "" || password === "") {
        throw new Error("Email or Password could not be empty");
      }
      authDispatch({ type: LOGIN_REQUEST });
      const response = await loginService(email, password);

      if (response !== undefined) {
        localStorage.setItem("AUTH_TOKEN", response.data.encodedToken);
        localStorage.setItem("AUTH_USER", response.data.foundUser.email);
        authDispatch({
          type: LOGIN_SUCCESS,
        });
        navigate("/");
      } else {
        throw new Error("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
      authDispatch({
        type: LOGIN_FAIL,
        payload: error,
      });
    }
  }

  function handelGuestLogin() {
    setEmail("adarshbalika@gmail.com");
    setPassword("adarshBalika123");
  }

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <form className="form-group" onSubmit={handleLogin}>
          <h2>Login</h2>

          <label>
            <span className="input-label"> Email </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            <span className="input-label"> Password </span>
            <input
              minLength="5"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <span className="validation-error"></span>
          <button type="submit" className="btn btn-primary-outline">
            Login
          </button>
          <button className="btn btn-primary" onClick={handelGuestLogin}>
            Guest Login
          </button>
        </form>
      )}
    </>
  );
};

export default LoginForm;
