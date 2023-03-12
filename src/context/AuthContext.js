import React, { createContext, useReducer } from "react";

export const AuthContext = createContext();
export const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.id));
      localStorage.setItem("token", JSON.stringify(action.payload.accessToken));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.id,
        token: action.payload.accessToken,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  console.log("AuthContext state:", state);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
