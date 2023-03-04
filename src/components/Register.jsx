import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    console.log(email, username, password);
  };

  return (
    <div>
      <h3>Sign up to be a GlobeStepper!</h3>
      <form onSubmit={handleRegister} className="login">
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
        <button id="register" type="submit">
          Register Me!
        </button>
      </form>
    </div>
  );
}

export default Register;
