/*function Button({text}){ // props : text
    return <button>{text}</button>;
}*/
function Button({children, onClick}){ // props : text
    return <button onClick={onClick}>{children}</button>;
}
export default Button;