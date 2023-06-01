==========================set focus in React=====
import {useState,useRef, useEffect} from "react"
import "./styles.css";

export default function App() {
  const ref = useRef()
  useEffect(()=>{
    // console.log(ref.current)
    ref.current.focus()
  },[])
  const [value,setValue] = useState(null);
  return (
    <div className="App">
      <input autofocus={true} ref={ref} value={value}/>
    </div>
  );
}


==========================set focus in Javascript=====


import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
 <input type="text" id="inputText">
</div>
`;
// window.onload(this,()=>{
//   console.log("hay")
// })
// window.addEventListener("load",()=>{
//   console.log("test");
// const inputBox = document.getElementById("inputText")
// console.log(inputBox,"inputBox");

// inputBox.focus()
// })

const A = [1,2,3];
// const B = A.map(obj=>{
//   return obj*2
// })

// console.log(A)
// console.log(B)

// Array.
const callback = (value,index)=>{
  return value*2
}
const result = mapArr(A, callback);
console.log(result)
function mapArr(arr, callback){
  const res = []
  for(let i=0;i<arr.length;i++){
    const callBackOutPut = callback(arr[i])
    res.push(callBackOutPut)
  }
  return res
}


1. banifits of context over redux 
2. benifits of middleware in redux 



