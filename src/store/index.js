import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import coursesReducer from './courses/courseSlice';
import authReducer from './user/authSlice';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import authorsReducer from './authors/authorsReducer';

const appInitialState = {
	courses: coursesReducer,
	auth: authReducer,
	authors: authorsReducer,
};

const store = configureStore(
	{ reducer: rootReducer },
	applyMiddleware(thunk),
	appInitialState,
	composeWithDevTools()
);

export default store;
