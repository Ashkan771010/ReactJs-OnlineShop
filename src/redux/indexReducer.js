import { combineReducers } from "redux";
import reducer from "./reducer";

const rootReducer = combineReducers({
  allReducer: reducer,
});

export default rootReducer;
