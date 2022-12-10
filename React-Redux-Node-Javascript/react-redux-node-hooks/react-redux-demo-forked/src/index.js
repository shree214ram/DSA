import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./store"
import FunctionBased from "./FunctionBased"
const App = () => {
    return (
  // <StrictMode>
         <FunctionBased />
// </StrictMode>
    )
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"))

