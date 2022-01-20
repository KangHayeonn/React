import { combineReducers } from "redux";
import counter from "./counter";
import sample from "./sample";
import loading from "./loading";

// 리듀서 함수를 하나로 묶음
const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export default rootReducer;
