import "./Signup.css";
import { useSignup } from "../../hooks/useSignup";

const SignupForm = ({
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
  const { signup } = useSignup(setError, setLoading, setUser);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

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

      <button disabled={loading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default SignupForm;
