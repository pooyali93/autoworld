import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // State ---------------------------------------
  const [loggedinUser, setLoggedinUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedinUser");
    if (storedUser) {
      setLoggedinUser(JSON.parse(storedUser));
    }
  }, []);

  
  // Methods -------------------------------------
  const login = (user) => {
    localStorage.setItem("loggedinUser", JSON.stringify(user));
  };

  const logout = () => {
    localStorage.removeItem("loggedinUser");
    setLoggedinUser(null);
  };

  const value = {
    loggedinUser,
    login,
    logout,
  };

  // Return --------------------------------------
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => useContext(AuthContext);
