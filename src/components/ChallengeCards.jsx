/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Image,
  Text,
  Heading,
  Button,
  Divider,
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
    <Card key={challenge.id} borderColor="green.300" maxW="sm">
      <CardBody>
        <Image src={challenge.imageUrl} alt={challenge.title} />

        <Heading className="card-title">{challenge.title}</Heading>
        <Text>
          {challenge.distanceKM} Km / {challenge.distanceMi} Miles
        </Text>
        <Divider borderColor="blue.300" />
        <Text className="card-description">{challenge.description}</Text>
        <Button
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
