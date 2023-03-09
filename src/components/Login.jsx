import React, { useState } from "react";
import { Link } from "react-router-dom";

// component imports
import Alert from "./Alert";
import loginUser from "../requests/loginUser";

// style import
import "../styles/Login.css";

function UserLogin() {
  const initialState = {
    fields: {
      email: "",
      password: "",
    },
    alert: {
      message: "",
      success: false,
    },
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleUserLogin = (event) => {
    event.preventDefault();
    loginUser(fields, setAlert);
    setAlert({ message: "", success: false });
  };

  const handleLoginButton = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  };

  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="login-container">
        <div className="login-header">
          <h2>Please login</h2>
        </div>
        <form onSubmit={handleUserLogin} className="login-form">
          <Alert message={alert.message} success={alert.isSuccess} />
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
              placeholder="Enter your email"
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={fields.password}
              onChange={handleFieldChange}
              placeholder="enter password"
              autoComplete="on"
            />
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
          Then come and join us{" "}
          <Link to="/register" className="register-link">
            here.
          </Link>
        </h4>
      </div>
    </>
  );
}

export default UserLogin;
