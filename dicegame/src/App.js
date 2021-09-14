import Board from './Board';
import {useState} from 'react';
import Button from "./Button";

function random(n){
    return Math.ceil(Math.random()*n);
}
function App(){
    const [num, setNum] = useState(1); // num : state 값 (현재 변수의 값) , setNum : (setter 함수) 이 함수를 호출할 때 parameter로 전달하는 값
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);
    const [otherNum, setOtherNum] = useState(1); // num : state 값 (현재 변수의 값) , setNum : (setter 함수) 이 함수를 호출할 때 parameter로 전달하는 값
    const [otherSum, setOtherSum] = useState(0);
    const [otherGameHistory, setOtherGameHistory] = useState([]);

    const handleRollClick = ()=> {
        const nextNum = random(6);
        const nextOtherNum = random(6);
        setNum(nextNum);
        setSum(sum + nextNum);
        setGameHistory([...gameHistory, nextNum]);
        setOtherNum(nextOtherNum);
        setOtherSum(otherSum + nextOtherNum);
        setOtherGameHistory([...otherGameHistory, nextOtherNum]);
    };

    const handleClearClick = () => {
        setNum(1);
        setSum(0);
        setGameHistory([]);
        setOtherNum(1);
        setOtherSum(0);
        setOtherGameHistory([]);
    };

    return (
    <div>
        <div>
            <Button onClick={handleRollClick}>던지기</Button>
            <Button onClick={handleClearClick}>처음부터</Button>
        </div>
        <div>
            <Board name="나" color="blue" num={num} sum={sum} gameHistory={gameHistory}/>
            <Board name="상대" color="red" num={otherNum} sum={otherSum} gameHistory={otherGameHistory}/>
        </div>
    </div>
    ); // element
}

export default App; // App이라는 component를 다른 파일에서도 사용할 수 있도록 default 해줌