import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

// Component import
import postDistance from "../requests/postDistance";
import Alert from "./Alert";
import Progress from "./Progress";

// Imported styling
import "../styles/current-challenge.css";
import getChallenge from "../requests/getChallenge";

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

  const handlePostDistance = (event) => {
    event.preventDefault();
    console.log(user);
    console.log(fields.distance);
    const updatedDistance = fields;
    updatedDistance.UserId = user;
    updatedDistance.ChallengeId = currentChallenge.id;
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

  if (!currentChallenge) return <p>Loading</p>;
  return (
    <div className="challenge-container">
      <div className="current-challenge-header">
        <h2>Your Current Challenge</h2>
        <h3>{currentChallenge.title}</h3>
        <img src={currentChallenge.imageUrl} alt="current-challenge" />
        <Progress />
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
