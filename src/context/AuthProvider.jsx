import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState(null);
  // const data = getLocalStorage();
  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setuserData({ employees, admin });
    // console.log(employees, admin);
  }, []);

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
