import { connect } from "react-redux";
// import { increaseAsync, decreaseAsync } from "../modules/counter";
import { increaseAsync, decreaseAsync } from "../modules/counter_saga";
import Counter from "../components/Counter";

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

// mapDispatchToProps 에 액션 생성 함수로 이루어진 객체 형태를 넣어줌
// connect 함수를 이용해 리덕스와 연동된 컴포넌트 만들어줌
export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increaseAsync,
    decreaseAsync,
  }
)(CounterContainer);
