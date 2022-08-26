export const useLogin = (setError, setLoading, setUser) => {
  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update user reducer
      setUser(json);

      // update loading state
      setLoading(false);
    }
  };

  return { login };
};
