const initState = {
  galleryData: [],
  finalGalleryData: [],
  playListData: [],
  data: null,
  err: null,
  progress: 0,
  downloadURL: [],
  snapshotStateMsg: null,
  loading: false,
  statusOfCreate: false,
  statusOfAddDownload: false,
}

const playListReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PLAYLIST_INPROGRESS':
      return { ...state, ...action.payload, loading: true };
    case 'CREATE_PLAYLIST_SUCCESS':
      return { ...state, ...action.payload, loading: false };
    case 'CREATE_PLAYLIST_ERROR':
      return { ...state, err: action.payload, loading: false };
    case 'UPLOAD_GALLERY_IMAGE_INPROGRESS':
      return { ...state, ...action.payload, loading: true };
    case 'UPLOAD_GALLERY_IMAGE_SUCCESS':
      return { ...state, ...action.payload, loading: false };
    case 'UPLOAD_GALLERY_IMAGE_ERROR':
      return { ...state, err: action.payload, loading: false };
    case 'RESET_UPLOAD':
      return { ...state, ...initState, ...action.payload };
    //setExistingImage
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
    case 'ADD_DOWNLOAD_URL_SUCCESS':
      return { ...state, ...action.payload, loading: false };
    //setGalleryData
    case 'GET_PLAYLIST_SUCCESS':
      return { ...state, ...action.payload, loading: false };
    case 'GET_PLAYLIST_ERROR':
      return { ...state, err: action.payload, loading: false };
    case 'GET_PLAYLIST_INPROGRESS':
      return { ...state, ...action.payload, loading: true };
    default:
      return state;
  }
};

export default playListReducer;