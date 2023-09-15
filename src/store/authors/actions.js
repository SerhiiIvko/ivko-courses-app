import { ADD_AUTHOR, DELETE_AUTHOR, SAVE_AUTHOR } from './types.js';

export const addAuthorAction = (payload) => ({
	type: ADD_AUTHOR,
	payload,
});
export const deleteAuthorAction = (payload) => ({
	type: DELETE_AUTHOR,
	payload,
});
export const saveAuthorAction = (payload) => ({
	type: SAVE_AUTHOR,
	payload,
});
