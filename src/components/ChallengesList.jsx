/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { PropTypes } from "prop-types";
import { Heading, SimpleGrid, Container } from "@chakra-ui/react";

// Component import
// import { Challenge } from ?
import ChallengeCard from "./ChallengeCards";

// Styles imports
// import "../styles/challenges-list.css";
// import "../styles/challenge-card.css";

function ChallengesList({ challenges }) {
  const chooseChallenge = ({ challenge }) => {
    console.log("challenge selected: ", challenge);
  };
  return (
    <Container>
      <Heading>Choose a Challenge!</Heading>
      <SimpleGrid column={3}>
        {challenges.map((challenge) => {
          return (
            <div key={challenge.id} className="challenge-cards">
              <ChallengeCard onSubmit={chooseChallenge} challenge={challenge} />
            </div>
          );
        })}
      </SimpleGrid>
    </Container>
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
