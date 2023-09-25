import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from '../../../store/rootReducer';
import Courses from '../Courses';

const store = createStore(rootReducer);

const mockCourses = [
	{
		id: 1,
		title: 'Test Course 1',
		description: 'Test description 1',
		duration: 120,
		authors: [1, 2],
		creationDate: '2021-07-01',
	},
	{
		id: 2,
		title: 'Test Course 2',
		description: 'Test description 2',
		duration: 60,
		authors: [2, 3],
		creationDate: '2021-08-01',
	},
];

store.dispatch({ type: 'courses/fetchCoursesSuccess', payload: mockCourses });

describe('Courses', () => {
	it('should display the correct number of CourseCards', () => {
		render(
			<Router>
				<Provider store={store}>
					<Courses />
				</Provider>
			</Router>
		);

		const courseCards = screen.getAllByTestId('course-card');
		expect(courseCards.length).toBe(mockCourses.length);
	});

	it('should show the CourseForm after clicking the "Add new course" button', () => {
		const { container } = render(
			<Router>
				<Provider store={store}>
					<Courses />
				</Provider>
			</Router>
		);

		const addNewCourseButton = screen.getByText('ADD NEW COURSE');
		fireEvent.click(addNewCourseButton);
	});
});
