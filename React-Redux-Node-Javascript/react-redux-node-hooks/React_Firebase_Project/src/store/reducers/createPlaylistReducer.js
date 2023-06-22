const initState = {
  galleryData: [],
  finalGalleryData: [],
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
    case 'UPLOAD_GALLERY_IMAGE_INPROGRESS':
      return { ...state, ...action.payload, loading: true };
    case 'UPLOAD_GALLERY_IMAGE_SUCCESS':
      return { ...state, ...action.payload, loading: false };
    case 'UPLOAD_GALLERY_IMAGE_ERROR':
      return { ...state, err: action.payload, loading: false };
    case 'RESET_UPLOAD':
      // return { ...state, ...initState, galleryData: state.galleryData };
      return { ...state, ...initState, ...action.payload };
    //setDisplay
    case 'SET_EXISTING_GALLERY_IMAGE_SUCCESS':
      return { ...state, ...action.payload, loading: false };
    case 'SET_EXISTING_GALLERY_IMAGE_ERROR':
      return { ...state, err: action.payload, loading: false };
    case 'SET_EXISTING_GALLERY_IMAGE_INPROGRESS':
      return { ...state, ...action.payload, loading: true };
    //setGallary
    case 'SET_GALLERY_IMAGE':
      return { ...state, ...action.payload, loading: false };
      //setFinalGallary
    case 'SET_FINAL_GALLERY_IMAGE':
      return { ...state, ...action.payload, loading: false };
    default:
      return state;
  }
};

export default displayReducer;