import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	courses: [],
	loading: false,
	error: null,
};

const courseSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {
		fetchCoursesStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		fetchCoursesSuccess: (state, action) => {
			state.courses = action.payload;
			state.loading = false;
			state.error = null;
		},
		fetchCoursesFailed: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { fetchCoursesStart, fetchCoursesSuccess, fetchCoursesFailed } =
	courseSlice.actions;

export default courseSlice.reducer;
