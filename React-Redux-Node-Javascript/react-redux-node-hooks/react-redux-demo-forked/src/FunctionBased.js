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