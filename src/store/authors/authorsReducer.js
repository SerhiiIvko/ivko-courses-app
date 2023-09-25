import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	courses: [],
	loading: false,
	error: null,
};

const authorSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {
		fetchAuthorsStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		fetchAuthorsSuccess: (state, action) => {
			state.authors = action.payload;
			state.loading = false;
			state.error = null;
		},
		fetchAuthorsFailed: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { fetchAuthorsStart, fetchAuthorsSuccess, fetchAuthorsFailed } =
	authorSlice.actions;

export default authorSlice.reducer;
