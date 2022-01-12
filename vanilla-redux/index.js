import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션 이름 : 문자열 형태, 주로 대문자, 고유해야 함 (중복x)
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 함수 생성 : 액션 객체 (type 포함 -> 액션 이름 사용)
const toggleSwitch = () => ({
  type: TOGGLE_SWITCH,
});
const increase = (difference) => ({
  type: INCREASE,
  difference,
});
const decrease = () => ({
  type: DECREASE,
});

// 초깃값 설정
const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서 함수 정의 (변화를 일으키는 함수) : 파라미터로는 state & action 받음
function reducer(state = initialState, action) {
  // state가 undefined일 때는 initialState를 기본 값으로 사용
  // action.type에 따라 다른 작업을 처리함
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 불변성 유지
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

// 스토어 만들기
const store = createStore(reducer);

// render 함수 생성 (상태가 업데이트될 때마다 호출) : html을 사용하여 만들어진 UI 속성을 상태에 따라 변경
const render = () => {
  const state = store.getState(); // 현재 상태를 불러옴
  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add("active"); // css .active를 동작하게 하는 것을 의미
  } else {
    divToggle.classList.remove("active");
  }
  // 카운터 처리
  counter.innerText = state.counter;
};

render();

// 구독하기 (스토어의 상태가 바뀔 때마다 render 함수가 호출되도록 해줌)
store.subscribe(render);

// 액션 발생시키기 (디스패치)
divToggle.onclick = () => {
  console.log("클릭은 되나?");
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
