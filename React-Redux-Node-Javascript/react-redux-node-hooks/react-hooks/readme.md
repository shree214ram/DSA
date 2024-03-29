1. useState 
2. useSelector 
3. useRef
4. useDispatch 
5. useReducer
6. useEffect
7. useCallback
8. useMemo
 
### useState ,useRef
1. useState is asynchronous Or synchronous ?
    Yes this is asynchronous because in setState Or useState we can pass a callback function as second paramter 

    useState()

    https://javascript.plainenglish.io/why-you-shouldnt-always-use-usestate-658994693018
2. useRef

### useEffect, useCallback, useMemo :- 

https://codesandbox.io/s/useeffect-usecallback-usememo-reactmemo-t3v5e4
https://www.youtube.com/watch?v=3cYtqrNUiVw&ab_channel=JustinKim

1. useEffect :- 
    useEffect(()=>{

    },[])
    ### useIffects 
    1. no parameter , {Always it will be called }
    2. [], {componanatDidMount}
    3. [count], {Third Render , ComponanatWillReciveProp}
    4. [] with return a callback function {componanatUnmount}
        https://stackoverflow.com/questions/55139386/componentwillunmount-with-react-useeffect-hook

        useEffect(() => {
            return () => {
                console.log(props);
            };
        }, []);

2. useMemo
    useMemo(()=>{

    },[value])

3. useCallback
    const callBackFn = useCallback(()=>{
        //it will excecute only change of counter value
    },[counter])

<Child callBackFn={callBackFn} counter={counter}>

### useSelector && useDispatch
<script>
import {incrementF,decrementF} from "./action"
import {useSelector,useDispatch} from "react-redux"

 const FunctionBased = () => {
    const dispatch = useDispatch()
    const data= useSelector(state=>state)
    const Add = () => {
        dispatch(incrementF())
    }
    const Minus = () => {
        dispatch(decrementF())
    }
    return (<div>
        <div>{data.value}</div>
        <button onClick={Add}>Increment</button>
        <button onClick={Minus}>Decrement</button>
    </div>)
}
export default FunctionBased
</script>


### useReducer :- 
https://atomizedobjects.com/blog/react/what-is-usereducer-in-react/
https://www.youtube.com/watch?v=kK_Wqx3RnHk&ab_channel=WebDevSimplified

<script>
import react , {useReducer} from "react"

const myReducer = (state,action) =>{
    switch(action.type){
        case "Add":
            return {...state, value: action.payload} 
        default :
            return state 
    }
}

const myFn = (props)=>{
    const [state,dispatch] = useReducer(myReducer,{value : 0})
    const Add = (val) =>{
        dispatch({type:"Add",payload:2})
    }
    return (
        <div>{state.value}</div>
    )
}
</script>

# custom hook
https://www.freecodecamp.org/news/how-to-create-react-hooks/
function  myCustomHook = () => {
    const [count,setCount] = useState(0)
    const myHook = () => {
        return (
            <div>Hello</div>
        )
    }
    return [count,myHook]
}
export myCustomHook;

# useMemo vs React.memo vs pureComponent [duplicate]
https://stackoverflow.com/questions/69783722/usememo-vs-react-memo-vs-purecomponent

We can use useMemo and React.memo inside the functional component

React.memo: Used to memoize components.
Suppose you have two components, two of which are on the same level, and the other component is the parent of these two components. We pass our states from the parent component to the children. When a change is made to one of the child components, the other child component is re-rendered. React.memo is used to prevent this re-rendering.


React.useMemo: Used to memoize value
When our calculations are allowed in an over function, this function is rendered with each re-rendering of the component. Using useMemo, we set the useMemo to be re-rendered only in certain cases

# React Momo Vs useMemo
https://blog.logrocket.com/react-memo-vs-usememo/

Below is how a PureComponent is defined using ES6 class. React.memo is the functional component equivalent of React.PureComponent. It is a higher-order component. If React.memo wraps a component, it memoizes the rendered output and skips subsequent renders if state, props, or context have not changed.