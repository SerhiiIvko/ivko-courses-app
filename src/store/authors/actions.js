import {
	ADD_AUTHOR,
	DELETE_AUTHOR,
	SAVE_AUTHOR,
	GET_AUTHORS,
} from './types.js';

export const addAuthor = (payload) => ({
	type: ADD_AUTHOR,
	payload,
});
export const deleteAuthor = (payload) => ({
	type: DELETE_AUTHOR,
	payload,
});
export const saveAuthor = (payload) => ({
	type: SAVE_AUTHOR,
	payload,
});
export const getAuthor = (payload) => ({
	type: GET_AUTHORS,
	payload,
});
