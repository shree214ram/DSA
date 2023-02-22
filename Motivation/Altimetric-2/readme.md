# UseEffect all stages 
1. What Return in componanatUnMount??
useEffect(()=>{
    return 
  },[value])
# Optimization in React Application in terms of hooks and function componenet?? 



  [11:12 AM] Shameer Ali Baig S
    const a = 10; console.log("Hello"+ a)
​[11:12 AM] sunny (Guest)
    h
​[11:13 AM] sunny (Guest)
    console.log({​​`Hello${​​a}​​`}​​)


    Destructure the following object and console log the name and city properties  const user = {  name: 'John',  age: 30,  address: {  city: 'New York',  state: 'NY'  }  }; 


    [11:21 AM] Shameer Ali Baig S
    Console.log(name); Console.log(city); 
​[11:29 AM] sunny (Guest)
    
<script>
/*function a(i){​​​​​​​
    return function (j){​​​​​​​
        if(j){​​​​​​​
            return a(i+j);
        }​​​​​​​
        return i
    }​​​​​​​
}​​​​​​​


const res= a(2)(3)();
console.log(res,"res")
*/



const user = {​​​​​​​  
name: 'John',  
age: 30, 
address: {​​​​​​​  city: 'New York',  state: 'NY'  }​​​​​​​  


}​​​​​​​; 
const {...user} = user
console.log(name)
console.log(city)











const {​​​​​​​name,address:{​​​​​​​city}​​​​​​​}​​​​​​​ = user
//const {​​​​​​​city}​​​​​​​ = address
console.log(name)
console.log(city)
//output {​​​​​​​john:NewYork}​​​​​​​
</script>

https://stackblitz.com/edit/react-nmyrzz?file=src%2FApp.js
https://react-rkwe9e.stackblitz.io/
https://stackblitz.com/edit/react-8356ox?file=src%2FApp.js



import "./styles.css";
import {useState} from "react"
export default function App() {
 const a = 5;
 const [count,setCount] = useState(0)
 const plus = () =>{
 if(count<a){
 setCount(count+1)
 }
 }
 const minus = () =>{
 if(count>0){
 setCount(count-1)
 }
 
 }
 const myJsx = [];
 myJsx.push(<button onClick={plus}> + </button>);
 for (let i = 0; i < a; i++) {
 myJsx.push(<span 
 style={{color:(count>=i+1)?"red":"black"}}
 id={i}> * </span>);
 }
 myJsx.push(<button onClick={minus}> - </button>);
 console.log('hay');
 return (
 <div className="App">
 <h1>Hello CodeSandbox</h1>
 <h2>Start editing to see some magic happen!</h2>
 {myJsx}
 {count}
 </div>
 );
}

https://codesandbox.io/s/elastic-dust-hkwbe5

https://codesandbox.io/s/startcountersunny-hkwbe5?file=/src/App.js



# Destructuring :-

<script>
/*function a(i){
	return function (j){
    	if(j){
    		return i+j;
        }
        return i
    }
}

const res= a(2)(3)();
console.log(res,"res")
*/


const user = {  name: 'John',  
age: 30, 
address: {  city: 'New York',  state: 'NY'  }  

}; 
const {name,address:{city}} = user
//const {city} = address
console.log(name)
console.log(city)
//output {john:NewYork}
</script>




# React Question :-
import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [alert, setAlert] = useState({ text: '', color: 'red' });
  const a = 5;
  const myJsx = [];
  for (let i = 0; i < a; i++) {
    myJsx.push('*');
  }
  return (
    <div>
      <p style={{ color: alert.color }}>{alert.text}</p>
      {/* Question 1: In this component, why alert text color is not turning green? */}
      <input
        onChange={(e) => {
          // setAlert({ ...alert, color: 'green' });
          setAlert({ ...alert, color: 'green' });

          setAlert({ ...alert, text: e.target.value });

          // setAlert({ ...alert, text: e.target.value, color: 'green' });
        }}
      />
      <br />
      <br />

      {/* Question 2:  Update the alert text and color from child component. We should pass only setter function or the function that updates the state to child component but should not pass the state object.  */}
      <Child
        myCallBack={(value) => {
          console.log('hay');
          setAlert({ ...alert, color: 'green', text: value });
        }}
      />
      {/* {myJsx} */}
    </div>
  );
}

const Child = (props) => (
  <input onChange={(e) => props.myCallBack(e.target.value)} />
);
