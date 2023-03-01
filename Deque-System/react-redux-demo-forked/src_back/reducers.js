import {INCREMENT,DECREMENT} from "./actionTypes"
export const reducers = (state = {value:0}, action) => {
  switch (action.type) {
    default:
      return state;
     case INCREMENT : 
      return {...state,value:state.value+1};
      case DECREMENT : 
      return {...state,value:((state.value == 0) ? 0 : state.value-1)};
  }
};
