import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

import getProgress from "../requests/getProgress";

function Progress() {
  const { user } = useAuthContext();

  const [currentProgress, setCurrentProgress] = useState(null);

  useEffect(() => {
    getProgress(user).then((response) => {
      const distance = response.data.map((data) => data.distance);
      console.log(distance);
      const distanceNum = distance.map((str) => {
        return parseInt(str, 10);
      });
      console.log(distanceNum);

      const distanceTotal = distanceNum.reduce((acc, value) => acc + value);
      console.log(distanceTotal);
      setCurrentProgress(distanceTotal);
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
          max="76"
          value={currentProgress}
        />
      </label>

      <div className="challenge-statistics">
        <span>Total distance:</span>
        <span>{currentProgress}km</span>
        <span>Distance Travelled:</span>
        <span>76km</span>
        <span>Distance Remaining: </span>
        <span>41km</span>
      </div>
    </div>
  );
}

export default Progress;
