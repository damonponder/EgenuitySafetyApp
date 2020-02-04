import * as types from "./constants";
const initialState = {
  token: null,
  isAuthenticated: false,
  companyName: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD:
      if (!action.token)
        return {
          ...state,
          isAuthenticated: false,
          token: null,
          companyName: null
        };
      return {
        ...state,
        isAuthenticated: true,
        token: action.token,
        companyName: action.companyName,
        accessLevel: action.accessLevel
      };
    case types.REMOVE:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        companyName: null
      };
    case types.VERIFY:
    default:
      return { ...state };
  }
}
