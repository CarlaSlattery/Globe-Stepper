import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink, Outlet } from "react-router-dom";
import { useLogOut } from "../hooks/useLogOut";

import globeStepper from "../assets/GlobeStepper.png";

function RootLayout() {
  const { logout } = useLogOut();

  const handleClick = () => {
    logout();
  };
  return (
    <div className="app-root-layout">
      <nav className="navigation">
        <img className="navbar-logo" src={globeStepper} alt="logo" />
        <div className="navigation-menu">
          <div>
            <button type="button" onClick={handleClick}>
              Log out
            </button>
          </div>
          <ul>
            <li>
              <NavLink to="/">Challenges</NavLink>
            </li>
            <li>
              <NavLink to="login">Login</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
