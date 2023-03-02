import React from "react";
import { PropTypes } from "prop-types";

// Component import
// import { Challenge } from ?
import ChallengeCard from "./ChallengeCards";

// Styles imports
import "../styles/challenge-card.css";

// template of list component - need to import relevant prop containing challenge objects from database

function ChallengesList({ challenges }) {
  const walks = challenges.map((challenge) => {
    <div key={challenge.id} className="challenge-cards">
      <ChallengeCard />
    </div>;
  });
  return <div>{walks}</div>;
}

ChallengesList.PropTypes = {
  challenges: PropTypes.arrayOf(PropTypes.instanceOf(Challenge)).isRequired,
};

export default ChallengesList;
