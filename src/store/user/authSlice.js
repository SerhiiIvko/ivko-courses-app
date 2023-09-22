import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		data: null,
		loading: false,
		error: null,
	},
	reducers: {
		loginStart: (state) => ({
			loading: true,
			error: null,
		}),
		loginSuccess: (state, action) => ({
			loading: false,
			data: action.payload,
			error: null,
		}),
		loginFailed: (state, action) => ({
			loading: false,
			data: null,
			error: action.payload,
		}),
		logout: (state) => ({
			data: null,
		}),
	},
});

export const { loginStart, loginSuccess, loginFailed, logout } =
	authSlice.actions;

export default authSlice.reducer;
