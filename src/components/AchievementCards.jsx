import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import getProgress from "../requests/getProgress";

function AchievementCards() {
  const { user } = useAuthContext();

  const [progress, setProgress] = useState(null);
  const [progress1, setProgress1] = useState(null);

  useEffect(() => {
    getProgress(user).then((response) => {
      console.log(response.data);
      const userAcheivement = response.data[0];
      console.log(userAcheivement);
      setProgress(userAcheivement);
    });
  }, [user]);

  useEffect(() => {
    getProgress(user).then((response) => {
      console.log(response.data);
      const userAcheivement1 = response.data[1];
      console.log(userAcheivement1);
      setProgress1(userAcheivement1);
    });
  }, [user]);

  if ((!progress, !progress1))
    return (
      <div>
        <h2>You need to join a challenge</h2>
        <h3>
          View the available challenges <Link to="/"> here </Link>
        </h3>
      </div>
    );
  return (
    <>
      <h2>Your Achievements!</h2>
      <div className="achievement-container">
        <div className="achievement-items">
          <div className="card-content">
            <h3 className="card-title">{progress.data}</h3>
            <p className="card-distances">{progress.distance} Km</p>
            <p className="card-description">{progress.createdAt}</p>
          </div>
        </div>
        <div className="achievement-items">
          <div className="card-content">
            <h3 className="card-title">{progress1.data}</h3>
            <p className="card-distances">{progress1.distance} Km</p>
            <p className="card-description">{progress1.createdAt}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AchievementCards;
