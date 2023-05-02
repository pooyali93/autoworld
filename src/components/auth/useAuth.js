import React, { createContext, useContext, useState, useEffect } from "react";
import { getUserFromLocalStorage, saveUserToLocalStorage } from './LocalStorage'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // State ---------------------------------------
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = getUserFromLocalStorage();
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  // Methods -------------------------------------
  const login = (userObj) => {
    setCurrentUser(userObj);
    saveUserToLocalStorage(userObj);
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  const value = { currentUser, login,logout,};

  // Return --------------------------------------
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
