/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import PropTypes from "prop-types";
import selectChallenge from "../requests/selectChallenge";

function ChallengeCard({ challenge }) {
  const handleJoinClick = (event) => {
    event.preventDefault();
    selectChallenge({ challenge });
    console.log(event);
  };
  console.log(challenge);

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
            onClick={() => {
              handleJoinClick(challenge);
            }}
          >
            Join The Challenge
          </button>
        </div>
      </div>
    </div>
  );
}

ChallengeCard.propTypes = {
  challenge: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    distanceKM: PropTypes.number.isRequired,
    distanceMi: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChallengeCard;
