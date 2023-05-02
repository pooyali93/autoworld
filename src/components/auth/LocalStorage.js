export const saveUserToLocalStorage = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const getUserFromLocalStorage = () => {
  const storedUser = localStorage.getItem("currentUser");
  return storedUser ? JSON.parse(storedUser) : null;
};