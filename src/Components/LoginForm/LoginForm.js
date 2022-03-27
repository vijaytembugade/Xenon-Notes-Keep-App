import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts";

const LoginForm = () => {
  const navigate = useNavigate();
  const { authState, loginService } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    loginService(email, password);

    authState.isLoggedIn && navigate("/");
  }

  function handelGuestLogin() {
    setEmail("adarshbalika@gmail.com");
    setPassword("adarshBalika123");
  }

  return (
    <>
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
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handelGuestLogin}
        >
          Guest Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
