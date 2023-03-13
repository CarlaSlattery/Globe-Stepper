import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

import globeStepper from "../assets/GlobeStepper.png";
import { useAuthContext } from "../hooks/useAuthContext";

// eslint-disable-next-line react/function-component-definition
const Navbar = () => {
  const { logout } = useLogout();
  const { username, user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <nav className="navigation">
          <img className="navbar-logo" src={globeStepper} alt="logo" />

          {user && (
            <div className="logged-in">
              <span>Welcome, {username}</span>
              <Link to="/userchallenge">Dashboard</Link>
              <Link to="/">Home</Link>
              <Link to="/">
                <button type="submit" onClick={handleClick}>
                  Log out
                </button>
              </Link>
            </div>
          )}
          {!user && (
            <div className="logged-out">
              <Link to="/">Challenges</Link>
              <Link to="/login">Login</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
