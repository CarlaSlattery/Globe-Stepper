import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from "history";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Router, Route } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import RootLayout from "../components/RootLayout";

describe("RootLayout component", () => {
  it("renders the correct navigation links and highlights the active link", () => {
    const history = createMemoryHistory();
    history.push("/");

    render(
      <Router history={history}>
        <RootLayout>
          <Route path="/" element={<div data-testid="challenges" />} />
          <Route path="login" element={<div data-testid="login" />} />
        </RootLayout>
      </Router>
    );

    const challengesLink = screen.getByRole("link", { name: "Challenges" });
    const loginLink = screen.getByRole("link", { name: "Login" });

    expect(challengesLink).toHaveAttribute("href", "/");
    expect(loginLink).toHaveAttribute("href", "/login");
    expect(challengesLink).toHaveClass("active");
    expect(loginLink).not.toHaveClass("active");

    fireEvent.click(loginLink);

    expect(challengesLink).not.toHaveClass("active");
    expect(loginLink).toHaveClass("active");
  });
});
