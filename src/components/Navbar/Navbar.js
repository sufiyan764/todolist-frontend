import "./Navbar.css";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { removeUser } from "../../pages/Login/actions";
import { setTasks } from "../../pages/Tasks/actions";

const Navbar = ({ user, removeUser, setTasks }) => {
  const { logout } = useLogout(removeUser, setTasks);
  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Todo List</h1>
        </Link>
        <Link to="/">
          <h4>Tasks</h4>
        </Link>
        <Link to="/expiredtasks">
          <h4>Expired Tasks</h4>
        </Link>
        <Link to="/trashbin">
          <h4>Trash Bin</h4>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Log in</Link>
              <Link to="/signup">Sign up</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.loginStore.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: () => {
      dispatch(removeUser());
    },
    setTasks: (arr) => {
      dispatch(setTasks(arr));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
