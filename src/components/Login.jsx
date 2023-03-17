/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
// eslint-disable-next-line prettier/prettier
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Text,
  Button,
  Alert,
  Link,
} from "@chakra-ui/react";
import { Link as ReactRouter } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
// component imports

// import loginUser from "../requests/loginUser";

// style import
// import "../styles/Login.css";

const UserLogin = () => {
  const initialState = {
    fields: {
      email: "",
      password: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const { login, error, isLoading, isSuccess } = useLogin();

  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleUserLogin = async (event) => {
    event.preventDefault();
    setFields({ ...fields });
    await login({ ...fields });
  };

  return (
    <Box>
      <Box maxW="40%" boxShadow="2xl" p="6" rounded="md" bg="blue.400">
        <Heading color="white">Login</Heading>
        <form onSubmit={handleUserLogin}>
          {error && <Alert status="error">{error}</Alert>}
          {isSuccess && <Alert status="success">Login successful!</Alert>}
          <FormControl>
            <FormLabel>Email:</FormLabel>
            <Input
              type="text"
              name="email"
              bg="gray.200"
              value={fields.email}
              onChange={handleFieldChange}
            />
            <FormHelperText color="white">Enter your email.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              bg="gray.200"
              value={fields.password}
              onChange={handleFieldChange}
            />
            <FormHelperText color="white">Enter password.</FormHelperText>
          </FormControl>
          <Button bg="green.300" m="1.5em" type="submit" disabled={isLoading}>
            {error && <Alert status="error">{error}</Alert>}
            Login
          </Button>
        </form>
      </Box>
      <Box maxW="70%" m="2em">
        <Heading>Not currently a GlobeStepper?</Heading>
        <Text fontSize="xl" m="1em">
          Then come and join us{" "}
          <Link as={ReactRouter} to="/register">
            here.
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default UserLogin;
