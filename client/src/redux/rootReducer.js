import { combineReducers } from "redux";
import reducer from "./jwt-verification/reducer";
import dataReducer from "./data/dataReducer";

export default combineReducers({
  jwt: reducer,
  data: dataReducer
});
