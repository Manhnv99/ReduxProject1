import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  listUser: userReducer,
});

export default rootReducer;
