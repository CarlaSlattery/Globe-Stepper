import React from "react";

// component imports
import Challenges from "./Challenges";
import CurrentChallenge from "./CurrentChallenge";

function Home() {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Globestepper</h1>
        <h3>Where will you walk?</h3>
      </div>
      <Challenges />
      <CurrentChallenge />
    </div>
  );
}

export default Home;
