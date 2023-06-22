import authReducer from './authReducer'
import uploadReducer from './uploadReducer'
import displayReducer from './displayReducer'
import createPlaylistReducer from './createPlaylistReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  upload: uploadReducer,
  display: displayReducer,
  firestore: firestoreReducer,
  playList: createPlaylistReducer
});

export default rootReducer

// the key name will be the data property on the state object