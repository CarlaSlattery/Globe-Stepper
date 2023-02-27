import React from "react";

import { render, screen } from "@testing-library/react";
import RootLayout from "../components/RootLayout";

describe("RootLayout", () => {
  it("renders links correctly", () => {
    render(<RootLayout />);
    const linkElement = screen.getByRole("link", {
      name: /challenges/i,
    });
    expect(linkElement).toBeInTheDocument();
  });
});
