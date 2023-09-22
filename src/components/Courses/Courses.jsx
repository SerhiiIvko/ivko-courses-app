import React, { useState, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import CourseInfo from '../CourseInfo/CourseInfo';
import coursesReducer from '../../store/courses/coursesReducer';
import * as types from '../../store/courses/types';
import EmptyCoursesList from '../Courses/components/EmptyCourseList/EmptyCourseList';
import { getCourses } from '../../services';
import './Courses.css';

const Courses = () => {
	const [selectedCourse, setSelectedCourse] = useState(null);
	const [searchQuery, setSearchQuery] = useState('');
	const [state, dispatch] = useReducer(coursesReducer, { courses: [] });
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

	const fetchCourses = async () => {
		try {
			const data = await getCourses();
			dispatch({
				type: types.GET_COURSES,
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchCourses();
	}, [dispatch]);

	if (Array.isArray(state.courses.result) === 0) {
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
						{Array.isArray(state.courses.result) &&
							state.courses.result
								?.filter((course) =>
									course.title
										?.toLowerCase()
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
					{/* <div>
						{Array.isArray(state.courses.result) &&
							state.courses.result.map((course) => (
								<CourseCard
									key={course.id}
									course={course}
									btext='SHOW COURSE'
									onCardClick={handleCardClick}
								/>
							))}
					</div> */}
				</div>
			)}
		</div>
	);
};

export default Courses;
