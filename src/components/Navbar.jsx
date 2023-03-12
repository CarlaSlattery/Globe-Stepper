import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

import globeStepper from "../assets/GlobeStepper.png";
import { useAuthContext } from "../hooks/useAuthContext";

// eslint-disable-next-line react/function-component-definition
const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <img className="navbar-logo" src={globeStepper} alt="logo" />
        <nav className="navigation">
          {user && (
            <div>
              <span>Welcome {user.email}</span>
              <button type="submit" onClick={handleClick}>
                Log out
              </button>
            </div>
          )}
          {!user && (
            <div>
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
