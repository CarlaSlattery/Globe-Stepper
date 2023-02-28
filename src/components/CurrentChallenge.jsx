import React, { useState } from "react";

// Component import
import ChallengeCard from "./ChallengeCards";

// Imported styling
import "../styles/current-challenge.css";

function CurrentChallenge() {
  const [distance, setNewDistance] = useState("");
  return (
    <div className="challenge-container">
      <div className="image-container">
        <div className="progress-container">
          <h3>Progress Tracker</h3>
          <label htmlFor="progress percentage">
            Challenge Completion Percentage
            <progress
              id="progressPercent"
              className="progress-bar"
              max="100"
              value="65"
            >
              65%
            </progress>
          </label>

          <form className="addDistance">
            <label htmlFor="distance entry">
              Post a Distance:
              <input
                id="addDistance"
                type="number"
                placeholder="0.00"
                required
                value={distance}
                onChange={(e) => setNewDistance(e.target.value)}
              />
            </label>
            <button className="enter-distance-btn" type="submit">
              Post
            </button>
            <p>{distance}</p>
          </form>

          <div className="challenge-statistics">
            <span>Distance Travelled:</span>
            <span>76km</span>
            <span>Distance Remaining:</span>
            <span>41km</span>
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
