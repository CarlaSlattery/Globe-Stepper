import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { render } from "@testing-library/react";
import App from "../components/App";

const App = () => <RouterProvider router={router} />;

describe("App", () => {
  it("renders app component correctly", () => {
    const { asFragment } = render(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the home component by default", () => {
    it("renders Home component by default", () => {
      render(<App />);
      const homeElement = screen.getByText(/where will you walk\?/i);
      expect(homeElement).toBeInTheDocument();
    });
  });
});
