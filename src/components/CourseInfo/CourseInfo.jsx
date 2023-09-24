import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../../common/Button/Button';
import getCourseDuration from '../../helpers/getCourseDuration';
import formatCreationDate from '../../helpers/formatCreationDate';
import getAuthorNames from '../../helpers/getAuthorNames';
import { getCourse } from '../../services';
import './CourseInfo.css';

function CourseInfo() {
	const [course, setCourse] = useState(null);
	const { id } = useParams();
	const authors = useSelector((state) => state.authors.result);
	const navigate = useNavigate();
	console.log('Course Info Authors: ', authors);
	console.log('Course Info before: ', course);
	console.log('Course Info id: ', id);
	useEffect(() => {
		async function fetchCourse() {
			try {
				const fetchedCourse = await getCourse(id);
				setCourse(fetchedCourse.result);
				console.log('Fetched course info: ', fetchedCourse);
			} catch (error) {
				console.log(error);
			}
		}
		fetchCourse();
	}, [id]);

	const handleBtnClick = () => {
		navigate('/courses/all');
	};
	console.log('Course info: ', course);

	if (!course) {
		return <div>Loading...</div>;
	}
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
								{/* {getAuthorNames(authors, course.authors)} */}
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
