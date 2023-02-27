import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="app-root-layout">
      <header>
        <nav>
          <span>GlobeStepper</span>
          <NavLink to="/">Challenges</NavLink>
          <NavLink to="login">Login</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
