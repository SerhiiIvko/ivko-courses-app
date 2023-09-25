import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserData, logout } from '../../services';

export const checkUserRole = createAsyncThunk(
	'auth/checkUserRole',
	async (token, thunkAPI) => {
		try {
			const userData = await fetchUserData(token);
			console.log('User data and roles: ', userData.result);
			return userData.result;
		} catch (error) {
			return thunkAPI.rejectWithValue({ error: error.message });
		}
	}
);

export const logoutUser = createAsyncThunk(
	'auth/logoutUser',
	async (token, thunkAPI) => {
		try {
			await logout(token);
			return true;
		} catch (error) {
			return thunkAPI.rejectWithValue({ error: error.message });
		}
	}
);
