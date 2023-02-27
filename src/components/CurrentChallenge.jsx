import React from "react";

// Component import
import ChallengeCard from "./ChallengeCards";

function CurrentChallenge() {
  return (
    <div className="challenge-container">
      <div className="image-container">
        <div className="progress-container">
          <h3>Progress Tracker</h3>
          <img
            className="progress-graphic"
            src="#"
            alt="percentage completed"
          />
          <div className="challenge-statistics">
            <span>Distance Travelled:</span>
            <span>Distance Remaining:</span>
          </div>
        </div>
        <div className="completed-challenges">
          <h3>Completed Challenges</h3>
          <ChallengeCard />
        </div>
      </div>
    </div>
  );
}

export default CurrentChallenge;
