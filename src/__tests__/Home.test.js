import React from "react";

import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

describe("Home component", () => {
  test("renders heading element", () => {
    render(<Home />);

    expect(screen.getByText(/globestepper/i)).toBeInTheDocument();
  });

  test("renders subtitle heading element", () => {
    render(<Home />);

    expect(screen.getByText(/where will you walk\?/i)).toBeInTheDocument();
  });
});
