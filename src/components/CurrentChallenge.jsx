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
import Achievement from "./Achievement";

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
    postDistance(updatedDistance, setAlert);
    setAlert({ message: "", success: false });
  };

  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    getChallenge(user).then((response) => {
      setCurrentChallenge(response.data[0]);
    });
  }, [user]);

  useEffect(() => {
    getProgress(user).then((response) => {
      const distance = response.data.map((data) => data.distance);

      const distanceNum = distance.map((str) => {
        return parseInt(str, 10);
      });

      const distanceTotal = distanceNum.reduce((acc, value) => acc + value);

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
      <Box align="center">
        <Image
          src={currentChallenge.imageUrl}
          alt="current-challenge"
          maxH="300px"
          maxW="70%"
        />
      </Box>
      <Heading mt="0.5em" align="center">
        Progress Tracker
      </Heading>
      <Text fontSize="lg" mt="0.4em" align="center">
        Challenge Completion Percentage
      </Text>
      <Box align="center">
        <Text
          pb="0.25em"
          mt="0"
          fontSize="6xl"
          color="blue.400"
          fontWeight="bold"
          align="center"
          letterSpacing="0.1rem"
          border="2px solid"
          maxW="50%"
        >
          {`${((currentProgress / currentChallenge.distanceKM) * 100).toFixed(
            1
          )}%`}
        </Text>
      </Box>
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
            Total Km:
          </Text>
          <Text
            bgColor="blue.100"
            padding="0.25em"
            align="center"
            fontSize={32}
            fontWeight="bold"
            letterSpacing="0.1rem"
          >
            {currentChallenge.distanceKM}
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
            Travelled Km:
          </Text>
          <Text
            bgColor="blue.100"
            padding="0.25em"
            align="center"
            fontSize={32}
            fontWeight="bold"
            letterSpacing="0.1rem"
          >
            {currentProgress}
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
            Remaining Km:
          </Text>
          <Text
            bgColor="blue.100"
            padding="0.25em"
            align="center"
            fontSize={32}
            fontWeight="bold"
            letterSpacing="0.1rem"
          >
            {currentChallenge.distanceKM - currentProgress}
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
                mr="0.5em"
                ml="3em"
                bg="gray.200"
              />
              Km
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
              Post Km
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
        <Heading>Your Distances</Heading>
        <Text>See your previous challenge achievements</Text>
        <Achievement />
        <Heading>Look how far you&apos;ve come!</Heading>
      </Box>
    </Container>
  );
}

export default CurrentChallenge;
