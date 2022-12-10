import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import FunctionBased from "./FunctionBased";
import { store } from "./store";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <FunctionBased />
    </StrictMode>
  </Provider>,
  rootElement
);
