import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import CourseInfo from '../CourseInfo/CourseInfo';
import { mockedCoursesList } from '../../constants.js';
import './Courses.css';

const Courses = () => {
	const [selectedCourse, setSelectedCourse] = useState(null);

	const handleCardClick = (course) => {
		setSelectedCourse(course);
	};

	const handleBackClick = () => {
		setSelectedCourse(null);
	};

	return (
		<div>
			{selectedCourse ? (
				<div>
					<CourseInfo
						btnText='BACK'
						onBtnClick={handleBackClick}
						course={selectedCourse}
					/>
				</div>
			) : (
				<div className='container'>
					<div className='search'>
						<SearchBar />
						<Button text='ADD NEW COURSE' />
					</div>
					<br />
					<br />
					<div>
						<div>
							{mockedCoursesList.map((course) => (
								<CourseCard
									course={course}
									btext='SHOW COURSE'
									onCardClick={handleCardClick}
								/>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Courses;
