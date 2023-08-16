import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import Courses from '../Courses/Courses';
import { mockedCoursesList, mockedAuthorsList } from '../../constants';

function CourseInfo({ courseId }) {
	const [showOtherComponent, setShowOtherComponent] = useState(false);
	const course = mockedCoursesList.find((course) => course.id === courseId);
	const handleClick = () => {
		setShowOtherComponent(true);
	};
	const authorNames = course.authors.map((authorId) => {
		const author = mockedAuthorsList.find((author) => author.id === authorId);
		return author.name;
	});
	return (
		<div>
			{showOtherComponent ? (
				<Courses />
			) : (
				<div>
					<h2>{course.title}</h2>
					<p>{course.description}</p>
					<p>Duration: {course.duration} minutes</p>
					<p>Authors: {authorNames.join(', ')}</p>
				</div>
			)}
			<Button text='BACK' onClick={handleClick} />
		</div>
	);
}

export default CourseInfo;
