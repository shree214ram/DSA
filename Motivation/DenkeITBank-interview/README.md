
describe("test for addition"){
    it("c should be addition of a and b"){
        const result  = 3
        const A = 1;
        const B = 2 ;
        const c = a+B;
        c.notEqualToNull()
        c.equalTo(result)
    }
}
//generator 

// Action dispacttype reducer store 
recat 
redux
import store from "./store "
import action from ".myAction"
import {useSelector,useDispatch} from "recat-redux"
const myCustomFun = () =>{
    const myDispatch = useDispatch()
    useEffect(()=>{
        fetch("apiPath")
        .then(data=>{
            myDispatch()
        })
        
    },[])

}

ReactDOM.render(<Provider store={store}>
        <myCustomFun></myCustomFun>
    </Provider>)

//store 
import createSore from "react-redux"
import myReducer from "./myReducer"
import { useEffect } from "react";

const store = createSore(myReducer)

//reducer
const myReducer = () =>{
    switch()
    case : 
    default:
        return state
    return 
}

//myAction 
const getData (data) =>{
    return {
        type:getData,
        payload: data
    }
}

