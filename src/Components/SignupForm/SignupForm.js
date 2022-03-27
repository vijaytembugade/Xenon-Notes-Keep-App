import React from "react";

const SignupForm = () => {
  return (
    <>
      <form className="form-group">
        <h2>Sign in</h2>

        <label>
          <span className="input-label"> Email </span>
          <input required type="email" />
        </label>

        <label>
          <span className="input-label"> Password </span>
          <input required minLength="5" type="password" />
        </label>
        <label>
          <span className="input-label"> Confirm Password </span>
          <input required minLength="5" type="password" />
        </label>
        <span className="validation-error"></span>
        <button className="btn btn-secondary-outline">Sign In</button>
      </form>
    </>
  );
};

export default SignupForm;
