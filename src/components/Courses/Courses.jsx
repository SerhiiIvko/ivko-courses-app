import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import CourseInfo from '../CourseInfo/CourseInfo';
import { mockedCoursesList } from '../../constants.js';
import './Courses.css';

const Courses = () => {
	const [selectedCourse, setSelectedCourse] = useState(null);
	const [searchQuery, setSearchQuery] = useState('');
	const navigate = useNavigate();

	const handleCardClick = (course) => {
		setSelectedCourse(course);
	};

	const handleBackClick = () => {
		setSelectedCourse(null);
	};

	const handleAddCourseClick = () => {
		navigate('/courses/add');
	};

	const handleSearch = (query) => {
		setSearchQuery(query);
	};

	const backToCourses = () => {
		navigate('/courses');
	};

	const filteredCourses = mockedCoursesList.filter((course) =>
		course.title.toLowerCase().trim().includes(searchQuery.toLowerCase())
	);

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
						<SearchBar onSearch={handleSearch} />
						<Button text='ADD NEW COURSE' onClick={handleAddCourseClick} />
					</div>
					<br />
					<br />
					<div>
						{filteredCourses.length ? (
							<div>
								{filteredCourses.map((course) => (
									<CourseCard
										key={course.id}
										course={course}
										btext='SHOW COURSE'
										onCardClick={handleCardClick}
									/>
								))}
							</div>
						) : (
							<div>
								<p>No courses found</p>
								<div>
									<Button text='BACK' onClick={backToCourses} />
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default Courses;
