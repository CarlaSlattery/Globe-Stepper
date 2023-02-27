import React from "react";

// Component import
import ChallengeCard from "./ChallengeCards";

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
