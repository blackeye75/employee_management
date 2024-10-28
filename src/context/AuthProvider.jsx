import React, { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={"Hell world "}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
