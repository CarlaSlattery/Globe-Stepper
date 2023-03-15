import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

// Component import
import postDistance from "../requests/postDistance";
import Alert from "./Alert";

// Imported styling
import "../styles/current-challenge.css";

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

  const handlePostDistance = (event) => {
    event.preventDefault();
    console.log(user);
    console.log(fields.distance);
    const updatedDistance = fields;
    updatedDistance.UserId = user;
    postDistance(updatedDistance, setAlert);
    setAlert({ message: "", success: false });
  };

  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="challenge-container">
      <div className="current-challenge-header">
        <h2>Your Current Challenge</h2>
        <h3>(Challenge Name)</h3>
        <img src="projectimageurl" alt="current-challenge" />
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
            <span>Distance Travelled:</span>
            <span>76km</span>
            <span>Distance Remaining: </span>
            <span>41km</span>
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
    </div>
  );
}

export default CurrentChallenge;
