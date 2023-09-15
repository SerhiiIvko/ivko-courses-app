import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		data: null,
		loading: false,
		error: null,
	},
	reducers: {
		loginStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		loginSuccess: (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.error = null;
		},
		loginFailed: (state, action) => {
			state.loading = false;
			state.data = null;
			state.error = action.payload;
		},
		logout: (state) => {
			state.data = null;
		},
	},
});

export const { loginStart, loginSuccess, loginFailed, logout } =
	authSlice.actions;

export default authSlice.reducer;
