import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// eslint-disable-next-line import/prefer-default-export
export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  }

  return context;
};
