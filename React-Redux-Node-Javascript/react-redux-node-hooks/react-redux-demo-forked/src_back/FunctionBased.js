import  { useSelector,useDispatch } from "react-redux";

import {increment,decrement} from "./action"
function FunctionBased(props) {
const dispatch = useDispatch();
  const counter = useSelector(state=>state) 
  const add = () =>{
    dispatch(increment())
  }
  const decrease = () =>{
    dispatch(decrement())
  }
  return (
    <center>
      <h1>{counter.value}</h1>
      <button onClick={add} style={{ marginRight: "10px" }}>increment</button>
      <button onClick={decrease}>decrement</button>
    </center>
  );
}

export default FunctionBased;
