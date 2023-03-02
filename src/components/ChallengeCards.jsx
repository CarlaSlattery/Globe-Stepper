/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import PropTypes from "prop-types";

import hadriansWallImg from "../assets/hadrians-wall.jpg";

function ChallengeCard({ challenge }) {
  const handleJoinClick = (challengeBeingJoined) => {
    console.log(challengeBeingJoined);
  };
  console.log(challenge);
  return (
    <div className="card-container">
      <img
        className="challenge-card-img"
        src={hadriansWallImg}
        alt="hadrians wall"
      />
      <h3 className="card-title">{challenge.title}</h3>
      <p className="card-distances">
        {challenge.distanceKM} / {challenge.distanceMi}
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
  );
}

ChallengeCard.propTypes = {
  challenge: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    distanceKM: PropTypes.number.isRequired,
    distanceMi: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChallengeCard;
