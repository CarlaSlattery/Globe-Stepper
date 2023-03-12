import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink, Outlet } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

import globeStepper from "../assets/GlobeStepper.png";

function RootLayout() {
  const { logout } = useLogout();
  const logoutClick = () => {
    logout();
  };

  return (
    <div className="app-root-layout">
      <nav className="navigation">
        <img className="navbar-logo" src={globeStepper} alt="logo" />
        <div className="navigation-menu">
          <ul>
            <li>
              <NavLink to="/">Challenges</NavLink>
            </li>
            <li>
              <NavLink to="login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={logoutClick}>
                Logout
              </NavLink>
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
