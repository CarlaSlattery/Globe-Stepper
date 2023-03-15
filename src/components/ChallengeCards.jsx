/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import selectChallenge from "../requests/selectChallenge";
import { useAuthContext } from "../hooks/useAuthContext";
import Alert from "./Alert";

function ChallengeCard({ challenge }) {
  const { user } = useAuthContext();
  const [error, setError] = useState("");
  const initialState = {
    alert: {
      message: "",
      success: false,
    },
  };
  const [alert, setAlert] = useState(initialState.alert);

  // removes join challenge confirmation message on user logout
  useEffect(() => {
    if (!user) {
      setAlert("");
    }
  }, [user]);

  const handleJoinClick = (event) => {
    event.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }
    console.log(user);
    console.log(challenge);
    const updatedChallenge = challenge;
    updatedChallenge.UserId = user;
    selectChallenge({ updatedChallenge });
    setAlert((prevState) => ({
      ...prevState,
      message: "Challenge joined successfully - good luck!",
      success: true,
    }));

    console.log(event);
  };

  return (
    <div className="card-container">
      <div className="card-items">
        <img
          className="challenge-card-img"
          src={challenge.imageUrl}
          alt={challenge.title}
        />
        <div className="card-content">
          <h3 className="card-title">{challenge.title}</h3>
          <p className="card-distances">
            {challenge.distanceKM} Km / {challenge.distanceMi} Miles
          </p>
          <p className="card-description">{challenge.description}</p>
          <button
            className="challenge-select-btn"
            type="submit"
            onClick={handleJoinClick}
          >
            Join The Challenge
          </button>
          <Alert message={alert.message} success={alert.success} />

          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </div>
  );
}

ChallengeCard.propTypes = {
  challenge: PropTypes.shape({
    staticId: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    distanceKM: PropTypes.number.isRequired,
    distanceMi: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    UserId: PropTypes.string,
  }).isRequired,
};

export default ChallengeCard;
