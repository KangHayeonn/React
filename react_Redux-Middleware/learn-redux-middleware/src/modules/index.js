import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter, { counterSaga } from "./counter_saga";
import sample, { sampleSaga } from "./sample_saga";
// import counter from "./counter";
// import sample from "./sample";
import loading from "./loading";

// 리듀서 함수를 하나로 묶음
const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export function* rootSaga() {
  // all 함수는 여러 사가를 합쳐 주는 역할을 함
  yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;
