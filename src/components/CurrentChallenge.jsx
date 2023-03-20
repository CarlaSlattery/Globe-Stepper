import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import { useAuthContext } from "../hooks/useAuthContext";

// Component import
import postDistance from "../requests/postDistance";
import Alert from "./Alert";
import getChallenge from "../requests/getChallenge";
import getProgress from "../requests/getProgress";

function CurrentChallenge() {
  const { user } = useAuthContext();

  const initialState = {
    fields: {
      distance: 0,
    },
    alert: {
      message: "",
      success: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const [currentProgress, setCurrentProgress] = useState(null);

  const handlePostDistance = (event) => {
    event.preventDefault();
    const updatedDistance = fields;
    updatedDistance.UserId = user;
    updatedDistance.ChallengeId = currentChallenge.id;
    console.log(updatedDistance);
    postDistance(updatedDistance, setAlert);
    setAlert({ message: "", success: false });
  };

  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    getChallenge(user).then((response) => {
      console.log(response.data);
      setCurrentChallenge(response.data[0]);
    });
  }, [user]);

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
      return currentProgress;
    });
  }, [user, currentProgress]);

  if (!currentChallenge)
    return (
      <div>
        <h2>You need to join a challenge</h2>
        <h3>
          View the available challenges <Link to="/"> here </Link>
        </h3>
      </div>
    );
  return (
    <div className="challenge-container">
      <div className="current-challenge-header">
        <h2>Your Current Challenge</h2>
        <h3>{currentChallenge.title}</h3>
        <Image
          src={currentChallenge.imageUrl}
          alt="current-challenge"
          maxH="270px"
        />
        <div className="progress-container">
          <h3>Progress Tracker</h3>
          <label htmlFor="progress percentage">
            Challenge Completion Percentage
            <progress
              id="progressPercent"
              className="progress-bar"
              max={currentChallenge.distanceKM}
              value={currentProgress}
            />
          </label>

          <div className="challenge-statistics">
            <span>Total distance:</span>
            <span>{currentChallenge.distanceKM}km</span>
            <span>Distance Travelled:</span>
            <span>{currentProgress}km</span>
            <span>Distance Remaining: </span>
            <span>
              ({currentChallenge.distanceKM} - {currentProgress})
            </span>
          </div>
        </div>
        <form onSubmit={handlePostDistance} className="addDistance">
          <label htmlFor="distance entry">
            Post a Distance:
            <input
              id="distance"
              name="distance"
              type="number"
              placeholder="0.00"
              value={fields.distance}
              onChange={handleFieldChange}
            />
          </label>
          <button className="enter-distance-btn" type="submit">
            Post
          </button>
          <Alert message={alert.message} success={alert.success} />
        </form>
      </div>
      <div className="completed-challenges">
        <h3>Your Completed Challenges</h3>
      </div>
    </div>
  );
}

export default CurrentChallenge;
