import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

import getProgress from "../requests/getProgress";

function Progress() {
  const { user } = useAuthContext();

  const [currentProgress, setCurrentProgress] = useState(null);

  useEffect(() => {
    getProgress(user).then((response) => {
      setCurrentProgress(response.data[0].distance);
      /*       const distance = response.data.map() */
      console.log(response.data[0].distance);
    });
  }, [user]);

  if (!currentProgress) return <p>Loading</p>;
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
        <span>{currentProgress}</span>
        <span>Distance Travelled:</span>
        <span>76km</span>
        <span>Distance Remaining: </span>
        <span>41km</span>
      </div>
    </div>
  );
}

export default Progress;
