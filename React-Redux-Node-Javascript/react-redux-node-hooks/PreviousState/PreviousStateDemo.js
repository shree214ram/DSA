import "./styles.css";
import {useState,useEffect} from "react"
export default function App() {
  const [myState,fnCheck]= useState();
  const [count,fnCounter]= useState(0);
  const handkeChange = (e) =>{
    fnCheck(e.target.value)
  console.log(myState,"at function callmystate")
}
  

  useEffect(()=>{
    console.log(myState,"in myState changed use effect")
  },[myState]);

  console.log(myState,"mystate at normal")
  return (
    <div className="App">{
      count
    }
      <h1>Hello CodeSandbox</h1>
      <input value={myState} onChange={(e) => handkeChange(e)}/>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
