import { connect } from "react-redux";
import { increase, decrease } from "../modules/counter";
import Counter from "../components/Counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// mapDispatchToProps 에 액션 생성 함수로 이루어진 객체 형태를 넣어줌
// connect 함수를 이용해 리덕스와 연동된 컴포넌트 만들어줌
export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increase,
    decrease,
  }
)(CounterContainer);
