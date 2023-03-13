/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
// component imports

// import loginUser from "../requests/loginUser";

// style import
import "../styles/Login.css";

const UserLogin = () => {
  const initialState = {
    fields: {
      email: "",
      password: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const { login, error, isLoading, isSuccess } = useLogin();

  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleUserLogin = async (event) => {
    event.preventDefault();
    setFields({ ...fields });
    await login({ ...fields });
  };

  return (
    <>
      <div className="login-container">
        <div className="login-header">
          <h2>Please login</h2>
        </div>
        <form onSubmit={handleUserLogin} className="login-form">
          {error && <div>{error}</div>}
          {isSuccess && <div>Login successful!</div>}
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
          {alert.message && <span className="form-error">{alert.message}</span>}
          <button type="submit" disabled={isLoading} className="login-button">
            {error && <div className="error">{error}</div>}
            Login
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
};

export default UserLogin;
