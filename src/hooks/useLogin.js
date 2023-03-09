import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post("/api/user/login", { email, password });

      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(response.data));

      // update the auth context
      dispatch({ type: "LOGIN", payload: response.data });

      // update loading state
      setIsLoading(false);
      // eslint-disable-next-line no-shadow
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.error);
    }
  };

  return { error, isLoading, login };
};

export default useLogin;
