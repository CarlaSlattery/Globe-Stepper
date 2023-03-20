import React, { useState } from "react";
// import "../styles/Register.css";
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
} from "@chakra-ui/react";
import Alert from "./Alert";
import registerUser from "../requests/registerUser";

function Register() {
  const initialState = {
    fields: {
      email: "",
      username: "",
      password: "",
    },
    alert: {
      message: "",
      success: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const [alert, setAlert] = useState(initialState.alert);

  const handleRegister = (event) => {
    event.preventDefault();
    registerUser(fields, setAlert);
    setAlert({ message: "", success: false });
  };

  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <Container bg="blue.400" box-shadow="2xl" rounded="md">
      <Heading color="white" p="0.5em">
        Sign up to start a challenge!
      </Heading>

      <form onSubmit={handleRegister} className="login">
        <FormControl>
          <Alert message={alert.message} success={alert.isSuccess} />
          <FormLabel m="0.75em" color="white" fontWeight="bold">
            Email
          </FormLabel>

          <Input
            type="email"
            name="email"
            bg="gray.200"
            value={fields.email}
            onChange={handleFieldChange}
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl>
          <FormLabel m="0.75em" color="white" fontWeight="bold">
            Username
          </FormLabel>

          <Input
            type="text"
            name="username"
            bg="gray.200"
            value={fields.username}
            onChange={handleFieldChange}
            placeholder="username"
          />
        </FormControl>
        <FormControl>
          <FormLabel m="0.75em" color="white" fontWeight="bold">
            Password
          </FormLabel>

          <Input
            type="password"
            name="password"
            bg="gray.200"
            value={fields.password}
            onChange={handleFieldChange}
            placeholder="enter password"
          />
        </FormControl>
        <FormControl>
          <FormLabel m="0.75em" color="white" fontWeight="bold">
            Confirm Password
          </FormLabel>

          <Input
            type="password"
            name="password"
            bg="gray.200"
            value={fields.password}
            onChange={handleFieldChange}
            placeholder="enter password"
          />

          <Button id="register" type="submit" m="1.5em" bg="green.300">
            Register Me
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}

export default Register;
