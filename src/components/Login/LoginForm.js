import "./Login.css";
import { useLogin } from "../../hooks/useLogin";

const LoginForm = ({
  error,
  email,
  password,
  loading,
  setEmail,
  setPassword,
  setError,
  setLoading,
  setUser,
}) => {
  const { login } = useLogin(setError, setLoading, setUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h3>Log In</h3>

      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={loading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default LoginForm;
