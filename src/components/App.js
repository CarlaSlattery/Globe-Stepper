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
import Register from "./Register";
import NotFound from "./NotFound";
import { AuthContext, authReducer, initialState } from "../context/AuthContext";

// Style imports
import "../styles/App.css";
import "../styles/navbar-roots.css";
import "../styles/home.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  const [state, dispatch] = React.useReducer(authReducer, initialState);
  return (
    // check the below code - error warning of multiple re-renders
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ state, dispatch }}>
      <RouterProvider router={router} />;
    </AuthContext.Provider>
  );
}

export default App;
