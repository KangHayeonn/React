import { useState } from "react";
import InfoReducer from "./Info_customhooks";
import CounterReducer from "./Counter_reducer";
import Average from "./Average_ref";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <InfoReducer />}
      <CounterReducer />
      <Average />
    </div>
  );
}

export default App;
