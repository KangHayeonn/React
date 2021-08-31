import ReactDOM from 'react-dom';

// 리액트 element를 함수형태로 만듦 (JSX문법을 작성할 때 사용자 정의 태그(custom tags)처럼 사용가능)
// Hello()라는 함수를 react component 라고 함 (리액트 컴포넌트) -> 첫글자를 대문자 + 반드시 JSX문법으로 만든 react element를 리턴해줘야함
function Hello(){
  return <h1>안녕 리액트!</h1>;
}
const element = (
  <>
    <Hello/> {/*각각의 태그는 Hello 함수가 return하는 리액트 element를 의미함 */} 
    <Hello/>
    <Hello/>
  </>
);
/*
const element = <h1>안녕 리액트!</h1>;
console.log(element);
*/ 
ReactDOM.render(element,document.getElementById('root'));
// 리액트 element(자바스크립트 객체) 를 ReactDOM의 render 메소드로 전달하면 react가 이 객체를 해석해서 html로 rendering 함.
