const initialState = {
  tasks: [],
  tasksCount: 0,
  task: {},
  name: "",
  error: "",
  emptyFields: [],
  status: "",
  editView: false,
  expiryDate: new Date(),
};

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_TASKS":
      return { ...state, tasks: action.payload };
    case "SET_TASKS_COUNT":
      return { ...state, tasksCount: action.payload };
    case "SET_TASK":
      return { ...state, task: action.payload };
    case "EDIT_TASK_BY_ID":
      let index = state.tasks.findIndex(
        (task) => task._id == action.payload._id
      );
      let editResult = [...state.tasks];
      editResult.splice(index, 1, action.payload);
      return { ...state, tasks: editResult };
    case "ADD_TASK":
      return { ...state, tasks: [action.payload, ...state.tasks] };
    case "DELETE_TASK":
      let result = state.tasks.filter((task) => task._id != action.payload);
      return { ...state, tasks: result };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_EMPTY_FIELDS":
      return { ...state, emptyFields: action.payload };
    case "SET_EDIT_VIEW":
      return { ...state, editView: !state.editView };
    case "SET_EXPIRY_DATE":
      return { ...state, expiryDate: action.payload };
    default:
      return state;
  }
}

export default tasksReducer;
