import React from "react";

function Register() {
  return (
    <div>
      <h3>Sign up to be a GlobeStepper!</h3>
      <form className="login">
        <label htmlFor="email">
          Email:
          <input type="email" placeholder="Enter your email" />
        </label>
        <label htmlFor="username">
          Username:
          <input type="text" placeholder="username" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" placeholder="enter password" />
        </label>
        <button id="register" type="submit">
          Register Me!
        </button>
      </form>
    </div>
  );
}

export default Register;
