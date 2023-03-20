import React from "react";
import { Flex, Button, Heading, Spacer, HStack, Image } from "@chakra-ui/react";
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
      <Image boxSize="6em" src={globeStepper} alt="logo" />
      <Heading as="h3" fontSize="1.6rem" p="1em" color="blue.500">
        GlobeStepper
      </Heading>
      <Spacer />

      {user && (
        <div className="logged-in">
          <span>Welcome, {username}!</span>
          <HStack spacing={2}>
            <NavLink to="/userchallenge">
              <Button bg="blue.400" color="white">
                Dashboard
              </Button>
            </NavLink>

            <NavLink to="/">
              <Button bg="blue.400" color="white">
                Home{" "}
              </Button>
            </NavLink>

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
            <NavLink to="/">
              <Button bg="blue.400" color="white">
                Challenges
              </Button>
            </NavLink>

            <NavLink to="/login">
              <Button bg="blue.400" color="white">
                Login{" "}
              </Button>
            </NavLink>
          </HStack>
        </div>
      )}
    </Flex>
  );
};

export default Navbar;
