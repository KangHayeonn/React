/*
import { Fragment } from 'react'; // <></> 이렇게 사용할 시 import 안해도 됨
import ReactDOM from 'react-dom';

const WINS ={
  rock : 'scissor',
  scissor : 'paper',
  paper : 'rock'
};

function handleClick(){
  console.log('가위바위보!');
}

function getResult(me, other){
  if(WINS[me]===other) return '승리';
  else if(me===WINS[other]) return '패배';
  else return '무승부';
}

const me = "rock";
const other = "scissor";

ReactDOM.render(
  <>
  <h1 id="title">가위바위보</h1>
  <h2>{getResult(me, other)}</h2>
  <button className="hand" onClick={handleClick}>가위</button>
  <button className="hand" onClick={handleClick}>바위</button>
  <button className="hand" onClick={handleClick}>보</button>
  </>,
  document.getElementById('root')
);*/
////////////////////////////////////////////////////////
/*<p className="hello">안녕 리액트!</p>*/
  //jsx문법 : 여러단어가 조합된 속성명은 camel case로 작성
  /*
  <form>
    <label htmlFor="name">이름</label>
    <input id="name" type="text" onBlur="" onFocus="" onMouseDown=""/> 
  </form>*/

  // jsx 문법으로 html 태그를 작성할 때, 하나로 감싸진 태그로 작성해야함 
  // div 태그 대신 fragment 를 사용 (불필요한 div를 줄일 수 있음) <Fragment> -> <>  같은 뜻
  /*
  <Fragment>
    <p>안녕</p>
    <p>리액트!</p>
  </Fragment>
  */
  /*
  <>
  <h1 id="title">가위바위보</h1>
  <button className="hand">가위</button>
  <button className="hand">바위</button>
  <button className="hand">보</button>
  </>*/

// 이미지 사용 문법 & 이벤트 handler 속성
/*
//import imageUrl from './hayeon.jpg'; // image : src에 저장할 경우 import해서 사용 
//const imageUrl = "/hayeon.jpg";      // image : public에 저장할 경우 절대경로
  <>
  <h1>나만의 {product + ',' +model} 주문하기</h1>
  <img src={imageUrl} alt="제품 사진"/>
  <button onClick={handleClick}>확인</button></>*/

  // ** jsx 문법에서 {} 중괄호를 이용해 JS의 표현식을 사용할 수 있음 
  // ** but 중괄호 안에 if,for,함수 선언과 같은 JS 문장은 사용 불가능


  // 2021-08-31
  import ReactDOM from "react-dom";
  import App from './App';
  
  //2021-09-15
  import './index.css';

  ReactDOM.render(<App/>, document.getElementById('root'));