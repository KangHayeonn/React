import "./App.css";
import MyComponent from "./MyComponent";

function App() {
  const name = "강하연";
  return (
    <div
      className="react" // 이부분도 될라나?
    >
      <MyComponent name={name}>리액트</MyComponent>
    </div>
  );
}

export default App;
