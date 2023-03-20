import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Image,
  Container,
  Button,
  Heading,
  FormControl,
  Input,
  FormLabel,
  Progress,
  Box,
} from "@chakra-ui/react";
import { useAuthContext } from "../hooks/useAuthContext";

// Component import
import postDistance from "../requests/postDistance";
import Alert from "./Alert";
import getChallenge from "../requests/getChallenge";
import getProgress from "../requests/getProgress";

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
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const [currentProgress, setCurrentProgress] = useState(null);

  const handlePostDistance = (event) => {
    event.preventDefault();
    const updatedDistance = fields;
    updatedDistance.UserId = user;
    updatedDistance.ChallengeId = currentChallenge.id;
    console.log(updatedDistance);
    postDistance(updatedDistance, setAlert);
    setAlert({ message: "", success: false });
  };

  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    getChallenge(user).then((response) => {
      console.log(response.data);
      setCurrentChallenge(response.data[0]);
    });
  }, [user]);

  useEffect(() => {
    getProgress(user).then((response) => {
      const distance = response.data.map((data) => data.distance);
      console.log(distance);
      const distanceNum = distance.map((str) => {
        return parseInt(str, 10);
      });
      console.log(distanceNum);

      const distanceTotal = distanceNum.reduce((acc, value) => acc + value);
      console.log(distanceTotal);
      setCurrentProgress(distanceTotal);
      return currentProgress;
    });
  }, [user, currentProgress]);

  if (!currentChallenge)
    return (
      <div>
        <Heading>You need to join a challenge</Heading>
        <h3>
          View the available challenges <Link to="/"> here </Link>
        </h3>
      </div>
    );
  return (
    <Container
      borderWidth="3px"
      borderColor="green.300"
      display="flex"
      flexDirection="column"
    >
      <Heading>Your Current Challenge</Heading>
      <Heading>{currentChallenge.title}</Heading>
      <Image
        src={currentChallenge.imageUrl}
        alt="current-challenge"
        maxH="270px"
      />
      <Heading>Progress Tracker</Heading>
      <FormLabel>Challenge Completion Percentage</FormLabel>
      <Progress
        id="progressPercent"
        size="lg"
        hasStripe
        isAnimated
        value={currentProgress}
        max={currentChallenge.distanceKM}
      />
      <Box display="flex" alignItems="baseline">
        <Box borderColor="blue.300">
          <span>Total distance: </span>
          <span>{currentChallenge.distanceKM}km</span>
        </Box>
        <Box>
          <span>Distance Travelled: </span>
          <span>{currentProgress}km</span>
        </Box>
        <Box>
          <span>Distance Remaining: </span>
          {currentChallenge.distanceKM} - {currentProgress}
        </Box>
      </Box>
      <FormControl onSubmit={handlePostDistance}>
        <Alert message={alert.message} success={alert.success} />
        <FormLabel>Post a Distance</FormLabel>

        <Input
          id="distance"
          name="distance"
          type="number"
          placeholder="0.00"
          value={fields.distance}
          onChange={handleFieldChange}
        />

        <Button
          bg="green.300"
          mt="1em"
          size="lg"
          loadingText="Posting"
          type="submit"
        >
          Post
        </Button>
      </FormControl>
      <h3>Your Completed Challenges</h3>
    </Container>
  );
}

export default CurrentChallenge;
