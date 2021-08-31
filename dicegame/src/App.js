import Button from "./Button";
import Dice from "./Dice";
function App(){
    return (
    <div>
        <div>
            {/*
            <Button text="던지기"/>
            <Button text="처음부터"/>*/}
            <Button>던지기</Button>
            <Button>처음부터</Button>
        </div>
        <Dice color="red" num={2}/> {/*숫자 2를 표시하려면 {} 써야함*/}
    </div>
    ); // element
}

export default App; // App이라는 component를 다른 파일에서도 사용할 수 있도록 default 해줌