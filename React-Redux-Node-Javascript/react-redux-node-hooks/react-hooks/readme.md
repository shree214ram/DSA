1. useState 
2. useSelector 
3. useRef
4. useDispatch 
5. useReducer
6. useEffect
7. useCallback
8. useMemo

### useEffect, useCallback, useMemo :- 

https://codesandbox.io/s/useeffect-usecallback-usememo-reactmemo-t3v5e4
https://www.youtube.com/watch?v=3cYtqrNUiVw&ab_channel=JustinKim

1. 
useEffect(()=>{

},[])

2. 
useMemo(()=>{

},[value])

3. 
const callBackFn = useCallback(()=>{

},[value])

<Child callBackFn={callBackFn} counter={counter}>


### useReducer :- 
https://atomizedobjects.com/blog/react/what-is-usereducer-in-react/
https://www.youtube.com/watch?v=kK_Wqx3RnHk&ab_channel=WebDevSimplified


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