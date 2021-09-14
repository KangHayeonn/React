import Board from './Board';
import {useState} from 'react';
import Button from "./Button";
import './App.css';

function random(n){
    return Math.ceil(Math.random()*n);
}
function App(){
    const [myHistory, setMyHistory] = useState([]);
    const [otherHistory, setOtherHistory] = useState([]);

    const handleRollClick = ()=> {
        const nextMyNum = random(6);
        const nextOtherNum = random(6);
        setMyHistory([...myHistory, nextMyNum]);
        setOtherHistory([...otherHistory, nextOtherNum]);
    };

    const handleClearClick = () => {
        setMyHistory([]);
        setOtherHistory([]);
    };

    return (
    <div className='App'>
        <div>
            <Button className='App-button' color="blue" onClick={handleRollClick}>던지기</Button>
            <Button className='App-button' color="red" onClick={handleClearClick}>처음부터</Button>
        </div>
        <div>
            <Board name="나" color="blue" gameHistory={myHistory}/>
            <Board name="상대" color="red"  gameHistory={otherHistory}/>
        </div>
    </div>
    ); // element
}

export default App; // App이라는 component를 다른 파일에서도 사용할 수 있도록 default 해줌