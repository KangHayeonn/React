import {useState} from 'react';
import Button from './Button';
import HandButton from './HandButton';
import HandIcon from './HandIcon';
import { compareHand, generateRandomHand } from './utils';

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return '승리';
  if (comparison < 0) return '패배';
  return '무승부';
}

function App() {
  const [hand, setHand] = useState('rock');
  const [otherHand, setOtherHand] = useState('rock');
  // hand와 otherHand를 state로 바꾸어 주세요
  //const hand = {state};
  //const otherHand = {state};

  const handleButtonClick = (nextHand) => {
      //const nextHand = random(6);
      setHand(nextHand);
      setOtherHand(generateRandomHand());
    // hand의 값을 nextHand 로 바꿔주세요
    // otherHand의 값을 generateRandomHand()의 리턴 값으로 바꿔주세요
  };

  const handleClearClick = () => {
      setHand('rock');
      setOtherHand('rock');
    // hand와 otherHand의 값을 'rock' 으로 변경해주세요
  };

  return (
    <div>
      <Button onClick={handleClearClick}>처음부터</Button>
      <p>{getResult(hand, otherHand)}</p>
      <div>
        <HandIcon value={hand} />
        VS
        <HandIcon value={otherHand} />
      </div>
      <div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;