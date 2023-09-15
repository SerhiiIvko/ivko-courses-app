import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import coursesReducer from './courses/coursesReducer.js';
import authReducer from './user/authSlice';

const appInitialState = {
	courses: coursesReducer,
	auth: authReducer,
	// authors: authorsReducer,
};

const store = createStore(rootReducer, appInitialState, composeWithDevTools());

export default store;
