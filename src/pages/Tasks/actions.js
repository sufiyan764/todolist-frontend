export function setTasks(arr) {
  return { type: "SET_TASKS", payload: arr };
}
export function setTasksCount(num) {
  return { type: "SET_TASKS_COUNT", payload: num };
}
export function setTask(obj) {
  return { type: "SET_TASK", payload: obj };
}
export function addTask(arr) {
  return { type: "ADD_TASK", payload: arr };
}
export function editTask(obj) {
  return { type: "EDIT_TASK_BY_ID", payload: obj };
}
export function deleteTask(arr) {
  return { type: "DELETE_TASK", payload: arr };
}
export function setName(str) {
  return { type: "SET_NAME", payload: str };
}
export function setError(str) {
  return { type: "SET_ERROR", payload: str };
}
export function setEmptyFields(arr) {
  return { type: "SET_EMPTY_FIELDS", payload: arr };
}
export function setEditView() {
  return { type: "SET_EDIT_VIEW" };
}
export function setExpiryDate(obj) {
  return { type: "SET_EXPIRY_DATE", payload: obj };
}
