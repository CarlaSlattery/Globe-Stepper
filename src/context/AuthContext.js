/* eslint-disable react/function-component-definition */
import React, { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload.id,
        username: action.payload.email,
        token: action.payload.accessToken,
      };
    case "LOGOUT":
      return {
        user: null,
      };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  console.log("AuthContext state:", state);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
