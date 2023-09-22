import * as types from './types.js';

// const authorsInitialState = {
// 	authors: [],
// 	loading: false,
// 	error: null,
// };

// const authorsReducer = (state = authorsInitialState, action) => {
// 	switch (action.type) {
// 		case types.SAVE_AUTHOR:
// 			return {
// 				...state,
// 				authors: [authorsInitialState, action.payload],
// 			};
// 		case types.ADD_AUTHOR:
// 			return {
// 				...state,
// 				authors: [state.authors, action.payload],
// 			};
// 		case types.DELETE_AUTHOR:
// 			return {
// 				...state,
// 				authors: state.authors.filter(
// 					(author) => author.id !== action.payload.id
// 				),
// 			};
// 		case types.GET_AUTHORS:
// 			return {
// 				...state,
// 				authors: action.payload,
// 			};
// 		default:
// 			return state;
// 	}
// };

// export default authorsReducer;

const authorsInitialState = {
	authors: [],
	loading: false,
	error: null,
};

const authorsReducer = (state = authorsInitialState, action) => {
	switch (action.type) {
		case types.ADD_AUTHOR:
			return {
				...state,
				authors: [...state.authors, action.payload],
			};
		case types.DELETE_AUTHOR:
			return {
				...state,
				authors: state.authors.filter((author) => author.id !== action.payload),
			};
		case types.GET_AUTHORS:
			return {
				...state,
				authors: action.payload,
			};
		default:
			return state;
	}
};

export default authorsReducer;
