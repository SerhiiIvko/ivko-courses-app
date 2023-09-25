import {
	fetchCoursesStart,
	fetchCoursesSuccess,
	fetchCoursesFailed,
} from './courseSlice';

export const fetchCourses = () => async (dispatch) => {
	try {
		dispatch(fetchCoursesStart());
		const response = await fetch('http://localhost:4000/courses/all', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		});
		const data = await response.json();
		dispatch(fetchCoursesSuccess(data));
	} catch (error) {
		dispatch(fetchCoursesFailed(error.message));
	}
};
