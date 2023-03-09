import React, { useState } from "react";
import "../styles/Register.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, username, password);
  };
  return (
    <div className="register-form">
      <div className="register-header">
        <h3>Sign up to start a challenge!</h3>
      </div>
      <form className="register-form" onSubmit={handleSubmit}>
         <label htmlFor="email">
          Email address:
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;
