// import { createSlice } from '@reduxjs/toolkit';
// import { checkUserRole, logoutUser } from '../user/thunk';

// const authSlice = createSlice({
// 	name: 'auth',
// 	initialState: {
// 		data: null,
// 		loggedIn: false,
// 		isAuth: false,
// 		name: '',
// 		email: '',
// 		token: '',
// 		role: '',
// 		loading: false,
// 		error: null,
// 	},
// 	reducers: {
// 		loginStart: (state) => {
// 			state.loading = true;
// 			state.error = null;
// 		},
// 		loginSuccess: (state, action) => {
// 			state.isAuth = true;
// 			state.name = action.payload.name;
// 			state.email = action.payload.email;
// 			state.token = action.payload.token;
// 			state.role = action.payload.role;
// 			state.loading = false;
// 			state.error = null;
// 		},
// 		loginFailed: (state, action) => {
// 			state.isAuth = false;
// 			state.name = '';
// 			state.email = '';
// 			state.token = '';
// 			state.role = '';
// 			state.loading = false;
// 			state.error = action.payload;
// 		},
// 		logout: (state) => {
// 			state.isAuth = false;
// 			state.name = '';
// 			state.email = '';
// 			state.token = '';
// 			state.role = '';
// 		},
// 	},
// 	extraReducers: (builder) => {
// 		builder
// 			.addCase(checkUserRole.pending, (state) => {
// 				state.loading = true;
// 			})
// 			.addCase(checkUserRole.fulfilled, (state, action) => {
// 				state.data = action.payload;
// 				state.loading = false;
// 			})
// 			.addCase(checkUserRole.rejected, (state, action) => {
// 				state.error = action.payload.error;
// 				state.loading = false;
// 			})
// 			.addCase(logoutUser.pending, (state) => {
// 				state.loading = true;
// 			})
// 			.addCase(logoutUser.fulfilled, (state) => {
// 				state.data = null;
// 				state.loading = false;
// 			})
// 			.addCase(checkUserRole.fulfilled, (state, action) => {
// 				if (action.payload) {
// 					state.data = action.payload;
// 				}
// 			})
// 			.addCase(logoutUser.fulfilled, (state, action) => {
// 				state.data = null;
// 				state.loggedIn = false;
// 			})
// 			.addCase(logoutUser.rejected, (state, action) => {
// 				state.error = action.payload.error;
// 				state.loading = false;
// 			});
// 	},
// });

// export const { loginStart, loginSuccess, loginFailed, logout } =
// 	authSlice.actions;

// export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { checkUserRole, logoutUser } from '../user/thunk';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		data: null,
		loggedIn: false,
		isAuth: false,
		name: '',
		email: '',
		token: '',
		role: '',
		loading: false,
		error: null,
	},
	reducers: {
		loginStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		loginSuccess: (state, action) => {
			state.isAuth = true;
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.token = action.payload.token;
			state.role = action.payload.role;
			state.loading = false;
			state.error = null;
		},
		loginFailed: (state, action) => {
			state.isAuth = false;
			state.name = '';
			state.email = '';
			state.token = '';
			state.role = '';
			state.loading = false;
			state.error = action.payload;
		},
		logout: (state) => {
			state.isAuth = false;
			state.name = '';
			state.email = '';
			state.token = '';
			state.role = '';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(checkUserRole.pending, (state) => {
				state.loading = true;
			})
			.addCase(checkUserRole.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loading = false;
			})
			.addCase(checkUserRole.rejected, (state, action) => {
				state.error = action.payload.error;
				state.loading = false;
			})
			.addCase(logoutUser.pending, (state) => {
				state.loading = true;
			})
			.addCase(logoutUser.fulfilled, (state) => {
				state.data = null;
				state.loggedIn = false;
				state.loading = false;
			})
			.addCase(logoutUser.rejected, (state, action) => {
				state.error = action.payload.error;
				state.loading = false;
			});
	},
});

export const { loginStart, loginSuccess, loginFailed, logout } =
	authSlice.actions;

export default authSlice.reducer;
