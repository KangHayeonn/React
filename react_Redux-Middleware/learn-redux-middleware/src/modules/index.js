import { combineReducers } from "redux";
import counter from "./counter";

// 리듀서 함수를 하나로 묶음
const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
