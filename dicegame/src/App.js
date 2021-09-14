import {useState} from 'react';
import Button from "./Button";
import Dice from "./Dice";

function random(n){
    return Math.ceil(Math.random()*n);
}
function App(){
    const [num, setNum] = useState(1); // num : state 값 (현재 변수의 값) , setNum : (setter 함수) 이 함수를 호출할 때 parameter로 전달하는 값
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);;

    const handleRollClick = ()=> {
        const nextNum = random(6);
        setNum(nextNum);
        setSum(sum + nextNum);
        /*
        const prevHistory = gameHistory;
        gameHistory.push(nextNum);
        console.log(prevHistory===gameHistory);
        setGameHistory(gameHistory);*/ // -> 배열의 잘못된 사용법
        
        setGameHistory([...gameHistory, nextNum]);
        // 참조형 타입의 state를 변경할 때는 아예 전체를 새로 만든다고 생각하기
    };

    const handleClearClick = () => {
        setNum(1);
        setSum(0);
        setGameHistory([]);
    };

    return (
    <div>
        <div>
            {/*
            <Button text="던지기"/>
            <Button text="처음부터"/>*/}
            <Button onClick={handleRollClick}>던지기</Button>
            <Button onClick={handleClearClick}>처음부터</Button>
        </div>
        <div>
            <h2>나</h2>
            <Dice color="red" num={num}/> {/*숫자 2를 표시하려면 {} 써야함*/}
            <h2>총점</h2>
            <p>{sum}</p>
            <h2>기록</h2>
            <p>{gameHistory.join(', ')}</p> {/*문자열로 만들어주는 메소드*/}
        </div>
    </div>
    ); // element
}

export default App; // App이라는 component를 다른 파일에서도 사용할 수 있도록 default 해줌