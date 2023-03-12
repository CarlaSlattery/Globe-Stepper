import React from "react";

// component imports
import ChallengesList from "./ChallengesList";
import data from "../data/challenges.json";
import CurrentChallenge from "./CurrentChallenge";

import "../styles/challenges-component.css";

function Home() {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Globestepper</h1>

        <h4>Where will you walk?</h4>
        <div className="welcome-container">
          <p>
            Join a challenge and walk the distance of a famous route or
            landmark. Choose from 9 different challenges with different
            difficulty levels based on distance. Each day enter the total
            distance you have walked to complete the challenge. Use the
            motivation to then take on another challenge.
          </p>
        </div>
      </div>
      <ChallengesList challenges={data.challenges} />
      <CurrentChallenge />
    </div>
  );
}

export default Home;
