import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { mockedCoursesList } from '../../constants.js';
import CourseCard from './components/CourseCard/CourseCard';
import './Courses.css';

const Courses = () => {
	return (
		<div className='container'>
			<SearchBar />
			<div>
				{mockedCoursesList.map((course) => (
					<CourseCard key={course.id} course={course} />
				))}
			</div>
		</div>
	);
};

export default Courses;
