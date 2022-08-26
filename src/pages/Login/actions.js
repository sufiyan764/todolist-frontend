export function setEmail(str) {
  return { type: "SET_EMAIL", payload: str };
}
export function setPassword(str) {
  return { type: "SET_PASSWORD", payload: str };
}
export function setError(str) {
  return { type: "SET_ERROR", payload: str };
}
export function setLoading(str) {
  return { type: "SET_LOADING", payload: str };
}
export function setUser(obj) {
  return { type: "SET_USER", payload: obj };
}
export function removeUser() {
  return { type: "REMOVE_USER" };
}
