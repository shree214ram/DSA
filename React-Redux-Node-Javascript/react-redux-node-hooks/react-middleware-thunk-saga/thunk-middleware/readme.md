https://www.youtube.com/watch?v=BuRFnGB7hkk&ab_channel=KishoriTutorials

1. install redux-thunk
2. I was doing some mistakes 
    1. innitial first time i was calling api in same componenet , """But that is not good""" 
    2. I was doing one mistake , at the time of call action in Action.js . {action must be a plain object use middle ware redux-thunk} because missing to pass dispatch function from componenent to Action.js . 
    I passed from componenet to Action.js dispatch as parameter . Its working . """But this is also not a good solution""". 
    3. We need to use middle ware in between action and reducer . So there are some steps to use it 
2. in store file we were using createSore from redux so also import applyMiddleware
    import {createStore,applyMiddleware} from "redux"
    import myReducer from "./myReducer"
    import thunk from "redux-thunk"
    const store = createStore(myReducer, applyMiddleware(thunk))
4. in Action.js file 
    const getData= () =>{
        return async (dispatch, getState)=>{ 
            //******this return is a main function which is responsible for creating a middleware 1. we can get the state and call any action and update in state via pure function of reducer ***////
            const [data,err] = await fetch("api")
            if(err){
                dispatch({
                    type:"SHOW_ERROR",
                    payload:err
                })
            }else {
                dispatch({
                    type:"GET_DATA",
                    payload:data
                })
            }
        }
    }