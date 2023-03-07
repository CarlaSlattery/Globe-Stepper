import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

// component imports
// import CurrentChallenge from "./CurrentChallenge";

// style import
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        navigate("/currentChallenge");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <main>
      <section>
        <div>
          <h2>Please login</h2>
          <form className="login">
            <div>
              <label htmlFor="email-address">
                Email address
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>

            <div>
              <label htmlFor="password">
                Password
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>

            <div>
              <button type="submit" onClick={onLogin}>
                Login
              </button>
            </div>
          </form>

          <h3 className="register-prompt">No currently a GlobeStepper? </h3>
          <h4 className="register-prompt-link">
            Then come and join us <NavLink to="/register">here.</NavLink>
          </h4>
        </div>
      </section>
    </main>
  );
}

export default Login;
