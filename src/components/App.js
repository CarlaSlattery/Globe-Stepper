import React from "react";

// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useAuthContext } from "../hooks/useAuthContext";

// Component imports
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import CurrentChallenge from "./CurrentChallenge";
import AchievementCards from "./AchievementCards";

// Style imports
// import "../styles/App.css";
// import "../styles/navbar-roots.css";

function App() {
  // const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="userchallenge" element={<CurrentChallenge />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/achievements" element={<AchievementCards />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
