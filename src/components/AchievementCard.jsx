import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Table, Th, Tr, Td, Thead } from "@chakra-ui/react";
import { useAuthContext } from "../hooks/useAuthContext";

function AchievementCards({ distance, createdAt }) {
  const { user } = useAuthContext();

  if (!user)
    return (
      <div>
        <h2>You need to join a challenge</h2>
        <h3>
          View the available challenges <Link to="/"> here </Link>
        </h3>
      </div>
    );

  return (
    <Table variant="striped" colorScheme="blue" size="sm">
      <Thead>
        <Tr>
          <Th>Distance</Th>
          <Th>Date</Th>
        </Tr>
      </Thead>
      <Tr>
        <Td>{distance}</Td>
        <Td>{createdAt.substring(0, 10)}</Td>
      </Tr>
    </Table>
  );
}

AchievementCards.propTypes = {
  distance: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default AchievementCards;
