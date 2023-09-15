import * as types from './types.js';

const initialState = {
	authors: [],
};
const authorsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SAVE_AUTHOR:
			return {
				...state,
				authors: action.payload,
			};
		case types.ADD_AUTHOR:
			return {
				...state,
				authors: [...state.authors, action.payload],
			};
		case types.DELETE_AUTHOR:
			return {
				...state,
				authors: state.authors.filter(
					(author) => author.id !== action.payload.id
				),
			};
		default:
			return state;
	}
};

export default authorsReducer;
