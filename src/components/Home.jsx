import React from "react";
import { Container, Heading, Text, Box } from "@chakra-ui/react";

// component imports
import ChallengesList from "./ChallengesList";
import data from "../data/challenges.json";
import CurrentChallenge from "./CurrentChallenge";

// import "../styles/challenges-component.css";

function Home() {
  return (
    <Container maxW="100%">
      <Box bg="blue.400" w="100%">
        <Heading as="h1" fontSize="6xl">
          Globestepper
        </Heading>
        <Text fontSize="3xl">Where will you walk?</Text>
      </Box>
      <Container maxW="60%" bg="green.300" mt="2em" px="3em" py="1em">
        <Text as="section" fontSize="1.4rem">
          Join a challenge and walk the distance of a famous route or landmark.
          Choose from 9 different challenges with different difficulty levels
          based on distance. Each day enter the total distance you have walked
          to complete the challenge. Use the motivation to then take on another
          challenge.
        </Text>
      </Container>

      <ChallengesList challenges={data.challenges} />
      <CurrentChallenge />
    </Container>
  );
}

export default Home;
