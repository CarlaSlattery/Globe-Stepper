/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Image,
  Text,
  Button,
  Divider,
  Heading,
  Flex,
} from "@chakra-ui/react";
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
    <Flex>
      <Card key={challenge.id} align="center" bg="gray.200">
        <CardBody>
          <Image src={challenge.imageUrl} alt={challenge.title} maxH="270px" />

          <Heading p=".2em" className="card-title">
            {challenge.title}
          </Heading>
          <Text p="0.5em">
            {challenge.distanceKM} Km / {challenge.distanceMi} Miles
          </Text>
          <Divider borderColor="blue.400" borderWidth="3px" />
          <Text p="0.5em" className="card-description">
            {challenge.description}
          </Text>
          <Button
            bg="green.300"
            _hover={{ bg: "blue.300" }}
            className="challenge-select-btn"
            type="submit"
            onClick={handleJoinClick}
          >
            Join The Challenge
          </Button>
        </CardBody>

        <Alert message={alert.message} success={alert.success} />

        {error && <div className="error">{error}</div>}
      </Card>
    </Flex>
  );
}

ChallengeCard.propTypes = {
  challenge: PropTypes.shape({
    staticId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    distanceKM: PropTypes.number.isRequired,
    distanceMi: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    UserId: PropTypes.string,
  }).isRequired,
};

export default ChallengeCard;
