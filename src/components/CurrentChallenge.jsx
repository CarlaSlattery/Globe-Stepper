import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Heading,
  Text,
  Image,
  FormLabel,
  Progress,
  Box,
  Button,
  Input,
  FormControl,
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

  const handlePostDistance = () => {
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
        <Heading mt="0.5em">You need to join a challenge</Heading>
        <Text>
          View the available challenges <Link to="/"> here </Link>
        </Text>
      </div>
    );
  return (
    <Container display="flex" flexDirection="column" maxW="70%">
      <Heading align="center" mt="0.5em" bg="green.300" p="0.25em">
        Your Current Challenge
      </Heading>
      <Heading align="center" color="blue.400" p="0.25em">
        {currentChallenge.title}
      </Heading>
      <Image
        src={currentChallenge.imageUrl}
        alt="current-challenge"
        maxH="270px"
      />

      <Heading mt="0.5em" align="center">
        Progress Tracker
      </Heading>
      <FormLabel fontSize="lg" mt="0.4em">
        Challenge Completion Percentage
        <Progress
          id="progressPercent"
          size="lg"
          mt="1em"
          mb="1.25em"
          height="3em"
          hasStripe
          isAnimated
          max={currentChallenge.distanceKM}
          value={currentProgress}
        />
      </FormLabel>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        mb="1em"
      >
        <Box
          border="2px solid"
          borderColor="gray.300"
          padding="1em"
          bg="green.300"
          borderRadius="5px"
        >
          <Text
            pb="0.25em"
            mt="0"
            fontSize="lg"
            fontWeight="bold"
            letterSpacing="0.1rem"
          >
            Total distance:
          </Text>
          <Text
            bgColor="blue.100"
            padding="0.25em"
            align="center"
            fontSize={32}
            fontWeight="bold"
            letterSpacing="0.1rem"
          >
            {currentChallenge.distanceKM} km
          </Text>
        </Box>
        <Box
          border="2px solid"
          borderColor="gray.300"
          padding="1em"
          bg="green.300"
          borderRadius="5px"
        >
          <Text
            pb="0.25em"
            mt="0"
            fontSize="lg"
            fontWeight="bold"
            letterSpacing="0.1rem"
          >
            Distance Travelled:
          </Text>
          <Text
            bgColor="blue.100"
            padding="0.25em"
            align="center"
            fontSize={32}
            fontWeight="bold"
            letterSpacing="0.1rem"
          >
            {currentProgress} Km
          </Text>
        </Box>
        <Box
          border="2px solid"
          borderColor="gray.300"
          padding="1em"
          bg="green.300"
          borderRadius="5px"
        >
          <Text
            pb="0.25em"
            mt="0"
            fontSize="lg"
            fontWeight="bold"
            letterSpacing="0.1rem"
          >
            Distance Remaining:{" "}
          </Text>
          <Text
            bgColor="blue.100"
            padding="0.25em"
            align="center"
            fontSize={32}
            fontWeight="bold"
            letterSpacing="0.1rem"
          >
            ({currentChallenge.distanceKM} - {currentProgress}) Km
          </Text>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" bg="blue.300" borderRadius="5px">
        <FormControl align="center">
          <form onSubmit={handlePostDistance} className="addDistance">
            <FormLabel paddingTop="1em" paddingLeft="1em" fontSize="lg">
              Post a Distance:
              <Input
                id="distance"
                name="distance"
                type="number"
                placeholder="0.00"
                value={fields.distance}
                onChange={handleFieldChange}
                maxW="50%"
                ml="3em"
                bg="gray.200"
              />
            </FormLabel>
            <Button
              bg="green.300"
              mt="1em"
              mb="1em"
              size="lg"
              type="submit"
              pl="3em"
              pr="3em"
            >
              Post
            </Button>
            <Alert message={alert.message} success={alert.success} />
          </form>
        </FormControl>
      </Box>
      <Box
        border="2px solid"
        borderColor="blue.300"
        padding="1em"
        mt="1.5em"
        mb="3em"
      >
        <Heading>Your Completed Challenges</Heading>
        <Text>See your finished challenges and achievements here!</Text>
      </Box>
    </Container>
  );
}

export default CurrentChallenge;
