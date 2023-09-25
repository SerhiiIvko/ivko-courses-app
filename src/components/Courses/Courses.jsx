import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import EmptyCoursesList from '../Courses/components/EmptyCourseList/EmptyCourseList';
import { deleteCourse, fetchUserData } from '../../services';
import './Courses.css';
import { fetchCourses } from '../../store/courses/thunk';

const Courses = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [userRole, setUserRole] = useState('');
	const { courses, loading, error } = useSelector((state) => state.courses);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleCardClick = (course) => {
		navigate(`/courses/${course.id}`);
	};

	const handleAddCourseClick = () => {
		navigate('/courses/add');
	};

	const handleSearch = (query) => {
		setSearchQuery(query);
	};

	useEffect(() => {
		dispatch(fetchCourses());
		fetchUserData()
			.then((data) => setUserRole(data.result.role))
			.catch((error) => console.error(error));
	}, [dispatch]);

	const handleDeleteCourse = async (id) => {
		try {
			await deleteCourse(id);
			dispatch(fetchCourses());
		} catch (error) {
			console.error(error);
		}
	};

	if (Array.isArray(courses.result).length === 0) {
		return <EmptyCoursesList />;
	}

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div>
			<div className='container'>
				<div className='search'>
					<SearchBar onSearch={handleSearch} />
					{userRole === 'admin' && (
						<Button text='ADD NEW COURSE' onClick={handleAddCourseClick} />
					)}
				</div>
				<br />
				<br />
				<div>
					{Array.isArray(courses.result) &&
						courses.result
							.filter((course) =>
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
									onDeleteClick={
										userRole === 'admin' ? handleDeleteCourse : null
									}
									role={userRole}
								/>
							))}
				</div>
			</div>
		</div>
	);
};

export default Courses;
