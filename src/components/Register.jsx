import React, { useState } from "react";
import "../styles/Register.css";
import Alert from "./Alert";
import registerUser from "../requests/registerUser";

function Register() {
  const initialState = {
    fields: {
      email: "",
      username: "",
      password: "",
    },
    alert: {
      message: "",
      success: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const [alert, setAlert] = useState(initialState.alert);

  const handleRegister = (event) => {
    event.preventDefault();
    registerUser(fields, setAlert);
    setAlert({ message: "", success: false });
  };

  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="register-form">
      <div className="register-header">
        <h3>Sign up to start a challenge!</h3>
      </div>
      <form onSubmit={handleRegister} className="login">
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
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={fields.username}
            onChange={handleFieldChange}
            placeholder="username"
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
          />
        </label>
        <label htmlFor="password-confirmation">
          Confirm Password:
          <input
            type="password"
            name="password"
            value={fields.password}
            onChange={handleFieldChange}
            placeholder="enter password"
          />
        </label>
        <button id="register" className="register" type="submit">
          Register Me
        </button>
      </form>
    </div>
  );
}

export default Register;
