import React, { useState } from "react";
import "../styles/Register.css";
import axios from "axios";
import Alert from "./Alert";

function Register() {
  const [alert, setAlert] = useState({ message: "", isSuccess: false });

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();

    setAlert({ message: "", isSuccess: false });

    axios
      .post("http://localhost:4000/users", { email, username, password })
      .then(() => {
        setAlert({ message: "registered", isSuccess: true });
      })
      .catch(() => {
        setAlert({ message: "not registered", isSuccess: false });
      });
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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
          />
        </label>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="username"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="enter password"
          />
        </label>
        <label htmlFor="password-confirmation">
          Confirm Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
