import React, { useState, useEffect, useReducer } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import getCourseDuration from '../../helpers/getCourseDuration';
import formatCreationDate from '../../helpers/formatCreationDate';
import getAuthorNames from '../../helpers/getAuthorNames';
import { GET_AUTHORS } from '../../store/authors/types';
import { getCourse, getAuthors } from '../../services';
import authorsReducer from '../../store/authors/authorsReducer';
import './CourseInfo.css';

function CourseInfo() {
	const [course, setCourse] = useState(null);
	const { id } = useParams();
	const navigate = useNavigate();
	const [state, dispatch] = useReducer(authorsReducer, { authors: [] });
	const allAuthors = async () => {
		try {
			const data = await getAuthors();
			dispatch({
				type: GET_AUTHORS,
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		allAuthors();
	}, [dispatch]);

	useEffect(() => {
		async function fetchCourse() {
			try {
				const fetchedCourse = await getCourse(id);
				setCourse(fetchedCourse.result);
			} catch (error) {
				console.log(error);
			}
		}
		fetchCourse();
	}, [id]);

	const handleBtnClick = () => {
		navigate('/courses/all');
	};

	if (!course) {
		return <div>Loading...</div>;
	}
	console.log(course.creationDate);
	return (
		<div>
			<div className='course-container'>
				<header>{course.title}</header>
				<div className='bordered-block'>
					<div className='block-text'>{course.description}</div>
					<div className='block-text'>
						<div>
							<p>
								<strong>ID: </strong> {course.id}
							</p>
							<p>
								<strong>Duration: </strong> {getCourseDuration(course.duration)}{' '}
								hours
							</p>
							<p>
								<strong>Created: </strong>
								{formatCreationDate(course.creationDate)}{' '}
							</p>
							<p className='author-names'>
								<strong>Authors: </strong>
								{getAuthorNames(state.authors.result, course.authors)}
							</p>
						</div>
					</div>
				</div>
				<div className='action-button'>
					<Button text='BACK' onClick={handleBtnClick} />
				</div>
			</div>
		</div>
	);
}

export default CourseInfo;
