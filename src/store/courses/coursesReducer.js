import * as types from './types.js';

const coursesInitialState = {
	courses: [],
};

const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case types.ADD_COURSE:
			return {
				...state,
				courses: [coursesInitialState, action.payload],
			};
		case types.DELETE_COURSE:
			return {
				...state,
				courses: state.courses.filter(
					(course) => course.id !== action.payload.id
				),
			};
		case types.SAVE_COURSES:
			return {
				...state,
				courses: action.payload,
			};
		case types.GET_COURSES:
			return {
				...state,
				courses: action.payload,
			};
		default:
			return state;
	}
};

export default coursesReducer;
