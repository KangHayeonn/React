import Dice from "./Dice";

function Board({name, color, num, sum, gameHistory}){ //F2 누르면 이름 변경 가능

    return (
        <div>
            <h2>{name}</h2>
            <Dice color={color} num={num}/> {/*숫자 2를 표시하려면 {} 써야함*/}
            <h2>총점</h2>
            <p>{sum}</p>
            <h2>기록</h2>
            <p>{gameHistory.join(', ')}</p> {/*문자열로 만들어주는 메소드*/}
        </div>
    ); // element
}

export default Board; // App이라는 component를 다른 파일에서도 사용할 수 있도록 default 해줌