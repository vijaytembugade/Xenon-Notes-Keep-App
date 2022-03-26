import React from "react";

const LoginForm = () => {
  return (
    <>
      <form className="form-group">
        <h2>Login</h2>

        <label>
          <span className="input-label"> Email </span>
          <input required type="email" />
        </label>

        <label>
          <span className="input-label"> Password </span>
          <input required minlength="5" type="password" />
        </label>
        <span className="validation-error"></span>
        <button className="btn btn-primary-outline">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
