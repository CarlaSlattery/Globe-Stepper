import React from "react";

// Component import
import ChallengeCard from "./ChallengeCards";

// Styles imports
import "../styles/challenge-card.css";

function Challenges() {
  return (
    <div className="challenges-container">
      <h2>Challenges</h2>
      <div className="challenge-cards">
        <ChallengeCard />
      </div>
    </div>
  );
}

export default Challenges;
