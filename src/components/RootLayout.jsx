import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="app-root-layout">
      <header>
        <nav>
          <span className="logo">GlobeStepperLogo</span>
          <NavLink to="/" activeClassName="active">
            Challenges
          </NavLink>
          <NavLink to="login" activeClassName="active">
            Login
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
