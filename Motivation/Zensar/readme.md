<script>
// 30 oct 2023 @ kamini Frontend Interview
import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [star, setStar] = useState("");
  const textHandler = (e) => {
    const val = e.target.value;
    const old = text;
    const newS = old + val[val.length - 1];
    setText(newS);
    const con = val.split("").map((obj) => "*");
    setStar(con.join(""));
  };

  const click = () => {
    setStar(text);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input type="text" onChange={(e) => textHandler(e)} value={star} />
      <button type="button" onClick={click}>
        {" "}
        add{" "}
      </button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
