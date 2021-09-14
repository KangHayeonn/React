/*const style = {
    padding : '14px 27px',
    border : 'solid 1px #7090ff',
    outline : 'none',
    color : '#7090ff',
    cursor : 'pointer',
    backgroundColor : 'rgba(0, 89, 255, 0.2)',
    borderRadius : '30px',
    fontSize : '17px',
};*/ // style의 속성값은 속성: 값을 이용한 객체 형식으로 적용 (- 기호는 -> Camel case로 변경)

/* ver1 :인라인 스타일
const baseButtonStyle = {
    padding : '14px 27px',
    borderRadius : '30px',
    outline : 'none',
    cursor : 'pointer',
    fontSize : '17px',
};

const blueButtonStyle = {
    ...baseButtonStyle,
    backgroundColor : 'rgba(0, 89, 255, 0.2)',
    border : 'solid 1px #7090ff',
    color : '#7090ff',
};

const redButtonStyle = {
    ...baseButtonStyle,
    backgroundColor : 'rgba(255, 78, 78, 0.2)',
    border : 'solid 1px #ff4664',
    color : '#ff4664',
};*/

// ver2 : 클래스네임
import './Button.css';

function Button({children, onClick, color='blue', className=''}){ // props : text
    // ver1 : 인라인 스타일
    //const style = color === 'red' ? redButtonStyle : blueButtonStyle;
    
    // ver2 : 클래스 네임
    const classNames = `Button ${color} ${className}`; // 템플릿 문자열 (공백이 있어야 여러 클래스를 넣을 수 있음)

    return <button className={classNames} onClick={onClick}>{children}</button>;
}
export default Button;