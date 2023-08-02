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
    case 'CREATE_DISPLAY_INPROGRESS':
      return { ...state, ...action.payload, loading: true };
    case 'CREATE_DISPLAY_SUCCESS':
      return { ...state, ...action.payload, loading: false };
    case 'CREATE_DISPLAY_ERROR':
      return { ...state, err: action.payload, loading: false };
    case 'UPLOAD_TITLE_IMAGE_INPROGRESS':
      return { ...state, ...action.payload, loading: true };
    case 'UPLOAD_TITLE_IMAGE_SUCCESS':
      return { ...state, ...action.payload, loading: false };
    case 'UPLOAD_TITLE_IMAGE_ERROR':
      return { ...state, err: action.payload, loading: false };
    case 'RESET_UPLOAD_DISPLAY':
      return { ...state, ...initState, displays: state.displays };
    //setDisplay
    case 'SET_DISPLAY_SUCCESS':
      return { ...state, ...action.payload, loading: false };
    case 'SET_DISPLAY_ERROR':
      return { ...state, err: action.payload, loading: false };
    case 'SET_DISPLAY_INPROGRESS':
      return { ...state, ...action.payload, loading: true };
    //setDisplay
    case 'SYSTEM_LOGOUT':
      return { ...state, ...initState };
    default:
      return state;
  }
};

export default displayReducer;