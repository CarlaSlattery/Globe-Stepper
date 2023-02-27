import React, { useState } from "react";

// component imports
import CurrentChallenge from "./CurrentChallenge";

function DisplayLoggedOut() {
  return (
    <div className="login-container">
      <h2>Please login</h2>
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
      </form>
    </div>
  );
}

function DisplayLoggedIn() {
  return (
    <>
      <h2 className="logged-in-msg">You are logged in</h2>
      <CurrentChallenge />
    </>
  );
}

function RenderLoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginButton = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  };
  return (
    <div>
      {isLoggedIn === false ? <DisplayLoggedOut /> : <DisplayLoggedIn />}
      <button
        type="submit"
        onClick={handleLoginButton}
        className="login-button"
      >
        {isLoggedIn === false ? "Login" : "Logout"}
      </button>
    </div>
  );
}

export default RenderLoginForm;
