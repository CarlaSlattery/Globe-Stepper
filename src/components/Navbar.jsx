import React from "react";
import { Flex, Button, Heading, Spacer, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

import globeStepper from "../assets/GlobeStepper.png";
import { useAuthContext } from "../hooks/useAuthContext";

// eslint-disable-next-line react/function-component-definition
const Navbar = () => {
  const { logout } = useLogout();
  const { username, user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <Flex as="nav" alignItems="center" p="1em">
      <img className="navbar-logo" src={globeStepper} alt="logo" />
      <Heading as="h3" fontSize="1.4rem" p="1em" color="blue.500">
        GlobeStepper
      </Heading>
      <Spacer />

      {user && (
        <div className="logged-in">
          <span>Welcome, {username}</span>
          <HStack spacing={2}>
            <Button bg="blue.400" color="white">
              <NavLink to="/userchallenge">Dashboard</NavLink>
            </Button>
            <Button bg="blue.400" color="white">
              <NavLink to="/">Home</NavLink>
            </Button>
            <NavLink to="/">
              <Button
                bg="blue.400"
                color="white"
                type="submit"
                onClick={handleClick}
              >
                Log out
              </Button>
            </NavLink>
          </HStack>
        </div>
      )}

      {!user && (
        <div className="logged-out">
          <HStack spacing="1.5em">
            <Button bg="blue.400" color="white">
              <NavLink to="/">Challenges</NavLink>
            </Button>
            <Button bg="blue.400" color="white">
              <NavLink to="/login">Login</NavLink>
            </Button>
          </HStack>
        </div>
      )}
    </Flex>
  );
};

export default Navbar;
