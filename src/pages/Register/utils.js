export function reducer(state, action) {
  switch (action.type) {
    case "setFullName":
      return { ...state, fullName: action.payload };
    case "setEmail":
      return { ...state, email: action.payload };
    case "setPassword":
      return { ...state, password: action.payload };
    default:
      throw new Error();
  }
}
