import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink, Outlet } from "react-router-dom";

import globeStepper from "../assets/GlobeStepper.jpg";

function RootLayout() {
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
