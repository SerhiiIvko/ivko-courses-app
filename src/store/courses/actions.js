import { ADD_COURSE, DELETE_COURSE, SAVE_COURSES } from './types.js';

export const addCourse = (courseData) => {
	return {
		type: ADD_COURSE,
		payload: courseData,
	};
};

export const editCourse = (courseData) => {
	return {
		type: SAVE_COURSES,
		payload: courseData,
	};
};

export const deleteCourse = (courseData) => {
	return {
		type: DELETE_COURSE,
		payload: courseData,
	};
};
