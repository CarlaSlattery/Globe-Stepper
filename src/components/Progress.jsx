import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

import getChallenge from "../requests/getChallenge";

function Progress() {
  const { user } = useAuthContext();

  const [currentChallenge, setCurrentChallenge] = useState(null);

  useEffect(() => {
    getChallenge(user).then((response) => {
      console.log(response.data);
      setCurrentChallenge(response.data[0]);
    });
  }, [user]);

  if (!currentChallenge) return <p>Loading</p>;
  return (
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
          35%
        </progress>
      </label>

      <div className="challenge-statistics">
        <span>Total distance:</span>
        <span>{currentChallenge.distanceKM}</span>
        <span>Distance Travelled:</span>
        <span>76km</span>
        <span>Distance Remaining: </span>
        <span>41km</span>
      </div>
    </div>
  );
}

export default Progress;
