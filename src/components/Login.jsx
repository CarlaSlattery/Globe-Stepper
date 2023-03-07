import React, { useState } from "react";
import { Link } from "react-router-dom";

// component imports

// style import
import "../styles/Login.css";

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
    <>
      <div className="login-container">
        <div className="login-header">
          <h2>Please login</h2>
        </div>
        <form className="login-form">
          <label htmlFor="email">
            {" "}
            Email:
            <input type="email" placeholder="Enter your email" />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" placeholder="enter password" />
          </label>
          <button
            type="submit"
            onClick={handleLoginButton}
            className="login-button"
          >
            {isLoggedIn === false ? "Login" : "Logout"}
          </button>
        </form>
      </div>
      <div className="register-prompt">
        <h3>Not currently a GlobeStepper?</h3>
        <h4>
          Then come and join us <Link to="/register">here.</Link>
        </h4>
      </div>
    </>
  );
}

export default RenderLoginForm;
