import {
	ADD_AUTHOR,
	DELETE_AUTHOR,
	SAVE_AUTHOR,
	GET_AUTHORS,
} from './types.js';

export const addAuthor = (authorData) => ({
	type: ADD_AUTHOR,
	payload: authorData,
});
export const deleteAuthor = (authorData) => ({
	type: DELETE_AUTHOR,
	payload: authorData,
});
export const saveAuthor = (authorData) => ({
	type: SAVE_AUTHOR,
	payload: authorData,
});
export const getAuthors = (authorData) => ({
	type: GET_AUTHORS,
	payload: authorData,
});
