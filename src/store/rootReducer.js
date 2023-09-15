import { combineReducers } from 'redux';

import coursesReducer from './courses/coursesReducer';
import authorsReducer from './authors/authorsReducer';
import authReducer from './user/authSlice';

const rootReducer = combineReducers({
	courses: coursesReducer,
	authors: authorsReducer,
	auth: authReducer,
});

export default rootReducer;
