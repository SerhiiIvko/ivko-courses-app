import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../../../../store/rootReducer';
import CourseCard from '../CourseCard';
import { BrowserRouter as Router } from 'react-router-dom';

const mockCourse = {
	id: 1,
	title: 'Test Course',
	description: 'Test description',
	duration: 90,
	authors: [1, 2],
	creationDate: '2021-07-01',
};

const store = createStore(rootReducer);

describe('CourseCard', () => {
	it('should display title', () => {
		render(
			<Router>
				<Provider store={store}>
					<CourseCard course={mockCourse} role='admin' btext='SHOW COURSE' />
				</Provider>
			</Router>
		);

		const title = screen.getByText(mockCourse.title);
		expect(title).toBeInTheDocument();
	});

	it('should display description', () => {
		render(
			<Router>
				<Provider store={store}>
					<CourseCard course={mockCourse} role='admin' btext='SHOW COURSE' />
				</Provider>
			</Router>
		);

		const description = screen.getByText(mockCourse.description);
		expect(description).toBeInTheDocument();
	});

	it('should display duration in the correct format', () => {
		render(
			<Router>
				<Provider store={store}>
					<CourseCard course={mockCourse} role='admin' btext='SHOW COURSE' />
				</Provider>
			</Router>
		);

		const duration = screen.getByText(`1:30 hours`);
		expect(duration).toBeInTheDocument();
	});

	it('should display created date in the correct format', () => {
		render(
			<Router>
				<Provider store={store}>
					<CourseCard course={mockCourse} role='admin' btext='SHOW COURSE' />
				</Provider>
			</Router>
		);

		const createdDate = screen.getByText(mockCourse.creationDate);
		expect(createdDate).toBeInTheDocument();
	});
});
