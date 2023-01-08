// https://codesandbox.io/s/useeffect-usecallback-usememo-reactmemo-t3v5e4

import { useCallback, useState } from "react";
import Child from "./Child";
import "./styles.css";
export default function App() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("");
  const callMyCllBack = useCallback(() => {
    console.log("hay");
    setCounter(counter + 1);
  }, [counter]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add +1
      </button>
      <Child myCallBack={callMyCllBack} counter={counter} />
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}
