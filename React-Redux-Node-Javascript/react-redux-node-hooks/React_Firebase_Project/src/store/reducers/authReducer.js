const initState = {
  data: null,
  err: null,
  progress: 0,
  snapshotStateMsg: null,
  loading: false,
  statusOfCreate: false,
  isCheckLoggedIn: false,
  userData: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_AUTH_SUCCESS':
      return { ...state, userData: action.payload };
    case 'LOGIN_AUTH_ERROR':
      return { ...state, err: action.payload };
    case 'USER_SIGNUP_INPROGRESS':
      return { ...state, ...action.payload, loading: true };
    case 'USER_SIGNUP_SUCCESS':
      return { ...state, ...action.payload, loading: false };
    case 'USER_SIGNUP_ERROR':
      return { ...state, err: action.payload, loading: false };
    case 'RESET_FORM':
      return { ...state, ...initState, userData: state.userData, isCheckLoggedIn:state.isCheckLoggedIn  };
    //setGalleryData
    case 'SET_AUTH_USER_DATA_SUCCESS': 
      return { ...state, ...action.payload, loading: false };
    case 'SET_AUTH_USER_DATA_ERROR':
      return { ...state, err: action.payload, loading: false };
    case 'SET_AUTH_USER_DATA_INPROGRESS':
      return { ...state, ...action.payload, loading: true };
    case 'SYSTEM_LOGOUT':
        return { ...state, ...initState };
    default:
      return state;
  }
};

export default authReducer;