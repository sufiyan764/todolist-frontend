export const useLogout = (removeUser, setTasks) => {
  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    removeUser();
    setTasks({});
  };

  return { logout };
};
