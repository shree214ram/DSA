const initState = {
  displays: [],
  data: null,
  err: null,
  progress: 0,
  downloadURL: [],
  snapshotStateMsg: null,
  loading: false,
  statusOfCreate: false
}

const displayReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_DISPLAY_SUCCESS':
      return { ...state, ...action.payload, loading: false };
    case 'CREATE_DISPLAY_ERROR':
      return { ...state, err: action.payload, loading: false };
    case 'UPLOAD_INPROGRESS':
      return { ...state, ...action.payload, loading: true };
    case 'UPLOAD_SUCCESS':
      return { ...state, ...action.payload, loading: false };
    case 'UPLOAD_ERROR':
      return { ...state, err: action.payload, loading: false };
    case 'RESET_UPLOAD':
      return { ...state, ...initState };
    //setDisplay
    case 'SET_DISPLAY_SUCCESS':
      return { ...state, ...action.payload, loading: false };
    case 'SET_DISPLAY_ERROR':
      return { ...state, err: action.payload, loading: false };
    case 'SET_DISPLAY_INPROGRESS':
      return { ...state, ...action.payload, loading: true };
    //setDisplay
    default:
      return state;
  }
};

export default displayReducer;