export const reducer = (state, action) => {
    switch (action.type) {
      case "GET_DOCTORS":
        return { ...state, doctors: action.payload };
      case "TOGGLE_THEME":
        return { ...state};
      default:
        throw new Error();
    }
  };