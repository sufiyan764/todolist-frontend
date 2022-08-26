import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// pages & components
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Tasks from "./pages/Tasks/Tasks";
import ExpiredTasks from "./pages/ExpiredTasks/ExpiredTasks";
import TrashBin from "./pages/TrashBin/TrashBin";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import { setUser } from "./pages/Login/actions";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.loginStore.user);
  useEffect(() => {
    dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Tasks /> : <Navigate to="/login" />}
            />
            <Route
              path="/expiredtasks"
              element={user ? <ExpiredTasks /> : <Navigate to="/login" />}
            />
            <Route
              path="/trashbin"
              element={user ? <TrashBin /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
