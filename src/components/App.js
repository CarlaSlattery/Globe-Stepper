import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Component imports
import RootLayout from "./RootLayout";
import Home from "./Home";
import Login from "./Login";

// Style imports
import "../styles/App.css";
import "../styles/navbar-roots.css";
import NotFound from "./NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
