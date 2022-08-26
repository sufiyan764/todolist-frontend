import "./Signup.css";

import { connect } from "react-redux";
import SignupForm from "../../components/Signup/SignupForm";
import { setUser } from "../Login/actions";
import { setEmail, setError, setLoading, setPassword } from "./actions";

function Signup({
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
      <SignupForm
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
    error: state.signupStore.error,
    email: state.signupStore.email,
    password: state.signupStore.password,
    loading: state.signupStore.loading,
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
