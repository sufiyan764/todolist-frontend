import { combineReducers } from "redux";
import loginReducer from "../pages/Login/reducers";
import signupReducer from "../pages/Signup/reducers";
import tasksReducer from "../pages/Tasks/reducers";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  loginStore: loginReducer,
  signupStore: signupReducer,
  tasksStore: tasksReducer,
});

export default rootReducer;
