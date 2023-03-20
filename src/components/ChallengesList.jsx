/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { PropTypes } from "prop-types";
import { SimpleGrid } from "@chakra-ui/react";

// Component import
// import { Challenge } from ?
// eslint-disable-next-line import/no-named-as-default
import ChallengeCard from "./ChallengeCards";

// Styles imports
// import "../styles/challenges-list.css";
// import "../styles/challenge-card.css";

function ChallengesList({ challenges }) {
  const chooseChallenge = ({ challenge }) => {
    console.log("challenge selected: ", challenge);
  };
  return (
    <SimpleGrid spacing={6} columns={{ base: 1, md: 2, lg: 3 }}>
      {challenges.map((challenge) => {
        return (
          <div key={challenge.id} className="challenge-cards">
            <ChallengeCard onSubmit={chooseChallenge} challenge={challenge} />
          </div>
        );
      })}
    </SimpleGrid>
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
