import {
	fetchAuthorsStart,
	fetchAuthorsSuccess,
	fetchAuthorsFailed,
} from './authorSlice';

export const fetchCourses = () => async (dispatch) => {
	try {
		dispatch(fetchAuthorsStart());
		const response = await fetch('http://localhost:4000/authors/all', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		});
		const data = await response.json();
		dispatch(fetchAuthorsSuccess(data));
	} catch (error) {
		dispatch(fetchAuthorsFailed(error.message));
	}
};
