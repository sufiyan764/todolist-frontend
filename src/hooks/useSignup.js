export const useSignup = (setError, setLoading, setUser) => {
  const signup = async (email, password) => {
    setLoading(true);
    setError(null);

    const response = await fetch("/api/user/signup", {
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

      // update the auth context
      setUser(json);

      // update loading state
      setLoading(false);
    }
  };

  return { signup };
};
