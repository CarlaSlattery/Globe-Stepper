import React, { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import getProgress from "../requests/getProgress";
import Alert from "./Alert";
import AchievementCard from "./AchievementCard";

function Achievement() {
  const { user } = useAuthContext();
  const initialState = {
    achievements: [],
    alert: {
      message: "",
    },
  };

  const [achievements, setAchievements] = useState(initialState.achievements);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    getProgress(user).then((res) => {
      setAchievements(res.data);
      console.log(res.data);
      setAlert({
        message: "",
      });
    });
  }, [user]);

  return (
    <div className="achievements">
      <Alert message={alert.message} />
      <h2>Look how far you have come!</h2>
      {achievements.map((achievement) => (
        <div className="achievement" key={achievement.id}>
          <AchievementCard {...achievement} />
        </div>
      ))}
    </div>
  );
}

export default Achievement;
