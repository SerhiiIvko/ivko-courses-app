import courseSlice, {
	fetchCoursesStart,
	fetchCoursesSuccess,
	fetchCoursesFailed,
} from './courseSlice';

const initialState = {
	courses: [],
	loading: false,
	error: null,
};

describe('courseSlice reducer', () => {
	it('should return the initial state', () => {
		expect(courseSlice(undefined, {})).toEqual(initialState);
	});

	it('should handle fetchCoursesStart', () => {
		const action = { type: fetchCoursesStart.type };

		expect(courseSlice(initialState, action)).toEqual({
			...initialState,
			loading: true,
			error: null,
		});
	});

	it('should handle fetchCoursesSuccess', () => {
		const newCourses = [
			{ id: 1, title: 'Test Course 1' },
			{ id: 2, title: 'Test Course 2' },
		];
		const action = { type: fetchCoursesSuccess.type, payload: newCourses };

		expect(courseSlice(initialState, action)).toEqual({
			...initialState,
			courses: newCourses,
			loading: false,
			error: null,
		});
	});

	it('should handle fetchCoursesFailed', () => {
		const errorMessage = 'Failed to fetch courses';
		const action = { type: fetchCoursesFailed.type, payload: errorMessage };

		expect(courseSlice(initialState, action)).toEqual({
			...initialState,
			loading: false,
			error: errorMessage,
		});
	});
});
