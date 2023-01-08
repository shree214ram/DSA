import react {useState} from "react"
const App =()=> {
    const [count,setCount] = useState(0)
    
    return(
        <div>
        <input type="button" onClick={()=> setCount((count) => count + 1)}/>
        counter = {count}
        </div>
    )
}
