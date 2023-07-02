import { applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { createStore, compose } from 'redux'
import fbConfig from '../config/fbConfig';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';


const middleware = [
  thunk.withExtraArgument({
    getFirebase,
    getFirestore
  }),
];

const composedEnhancers = compose(
  reduxFirestore(fbConfig),
  applyMiddleware(...middleware)
);

const initialState = {}

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;



