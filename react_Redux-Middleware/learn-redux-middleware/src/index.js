import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import rootReducer from "./modules";
//import loggerMiddleware from "./lib/loggerMiddleware";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

// 스토어를 생성
//const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

// 오픈 소스 미들웨어 라이브러리 사용
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));

// Provider로 리액트 프로젝트에 리덕스를 적용
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
