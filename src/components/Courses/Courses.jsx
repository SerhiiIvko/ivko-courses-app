import React, { useState, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import CourseInfo from '../CourseInfo/CourseInfo';
import reducer from '../../store/courses/coursesReducer';
import * as types from '../../store/courses/types';
import EmptyCoursesList from '../Courses/components/EmptyCourseList/EmptyCourseList';
import './Courses.css';

const Courses = () => {
	const [selectedCourse, setSelectedCourse] = useState(null);
	const [searchQuery, setSearchQuery] = useState('');
	const [state, dispatch] = useReducer(reducer, { courses: [] });
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

	// const backToCourses = () => {
	// 	navigate('/courses/all');
	// };

	const fetchCourses = async () => {
		try {
			const options = {
				mode: 'no-cors',
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const response = await fetch(
				'https://example.com/api/courses/all',
				options
			);
			const data = await response.json();
			dispatch({
				type: types.ADD_COURSE,
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchCourses();
	}, []);

	if (state.courses.length === 0) {
		return <EmptyCoursesList />;
	}

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
						{state.courses
							.filter((course) =>
								course.title
									.toLowerCase()
									.trim()
									.includes(searchQuery.toLowerCase())
							)
							.map((course) => (
								<CourseCard
									key={course.id}
									course={course}
									btext='SHOW COURSE'
									onCardClick={handleCardClick}
								/>
							))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Courses;
