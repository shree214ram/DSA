const initState = {
  data: null,
  err: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
      case 'LOGIN_AUTH_SUCCESS':
        return {...state,userData:action.payload};
      case 'LOGIN_AUTH_ERROR':
        return {...state,err:action.payload};
      default:
        return state;
    }
};

export default authReducer;