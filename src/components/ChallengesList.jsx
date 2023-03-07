/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { PropTypes } from "prop-types";

// Component import
// import { Challenge } from ?
import ChallengeCard from "./ChallengeCards";

// Styles imports
import "../styles/challenges-list.css";
import "../styles/challenge-card.css";

// template of list component - need to import relevant prop containing challenge objects from database

function ChallengesList({ challenges }) {
  console.log(challenges.challenges);
  return (
    <>
      <h2>Choose a Challenge!</h2>
      <div className="challenge-card-container">
        {challenges.map((challenge) => {
          return (
            <div key={challenge.id} className="challenge-cards">
              <ChallengeCard challenge={challenge} />
            </div>
          );
        })}
      </div>
    </>
  );
}

ChallengesList.propTypes = {
  challenges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      distanceKM: PropTypes.number.isRequired,
      distanceMi: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ChallengesList;
