import { connect } from "react-redux";
import LoginForm from "../../components/Login/LoginForm";
import {
  setEmail,
  setError,
  setLoading,
  setPassword,
  setUser,
} from "./actions";

function Login({
  user,
  error,
  email,
  password,
  loading,
  setEmail,
  setPassword,
  setError,
  setLoading,
  setUser,
}) {
  return (
    <div>
      <LoginForm
        error={error}
        email={email}
        password={password}
        loading={loading}
        setEmail={setEmail}
        setPassword={setPassword}
        setError={setError}
        setLoading={setLoading}
        setUser={setUser}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.loginStore.user,
    error: state.loginStore.error,
    email: state.loginStore.email,
    password: state.loginStore.password,
    loading: state.loginStore.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEmail: (str) => {
      dispatch(setEmail(str));
    },
    setPassword: (str) => {
      dispatch(setPassword(str));
    },
    setError: (str) => {
      dispatch(setError(str));
    },
    setLoading: (bool) => {
      dispatch(setLoading(bool));
    },
    setUser: (obj) => {
      dispatch(setUser(obj));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
