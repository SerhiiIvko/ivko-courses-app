import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import coursesReducer from './courses/coursesReducer.js';
import authReducer from './user/authSlice';
import { configureStore } from '@reduxjs/toolkit';
import authorsReducer from './authors/authorsReducer';

const appInitialState = {
	courses: coursesReducer,
	auth: authReducer,
	authors: authorsReducer,
};

const store = configureStore(
	{ reducer: rootReducer },
	appInitialState,
	composeWithDevTools()
);

export default store;
