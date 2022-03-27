import React from "react";

const SignupForm = () => {
  return (
    <>
      <form class="form-group">
        <h2>Sign in</h2>

        <label>
          <span class="input-label"> Email </span>
          <input required type="email" />
        </label>

        <label>
          <span class="input-label"> Password </span>
          <input required minLength="5" type="password" />
        </label>
        <label>
          <span class="input-label"> Comfirm Password </span>
          <input required minLength="5" type="password" />
        </label>
        <span class="validation-error"></span>
        <button class="btn btn-secondary-outline">Sign In</button>
      </form>
    </>
  );
};

export default SignupForm;
