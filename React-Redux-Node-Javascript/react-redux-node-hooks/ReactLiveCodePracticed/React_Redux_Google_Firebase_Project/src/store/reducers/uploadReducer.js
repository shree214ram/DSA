const initState = {
    data: null,
    err: null,
    progress: 0,
    downloadURL: [],
    snapshotStateMsg: null,
    loading: false
}

const uploadReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPLOAD_INPROGRESS':
            return { ...state, ...action.payload, loading: true };
        case 'UPLOAD_SUCCESS':
            return { ...state, ...action.payload, loading: false };
        case 'UPLOAD_ERROR':
            return { ...state, err: action.payload, loading: false };
        case 'RESET_UPLOAD':
            return { ...state, ...initState };
        case 'SYSTEM_LOGOUT':
            return { ...state, ...initState };
        default:
            return state;
    }
};

export default uploadReducer;