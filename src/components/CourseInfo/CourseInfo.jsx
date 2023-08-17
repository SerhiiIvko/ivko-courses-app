import React from 'react';
import Button from '../../common/Button/Button';
import getCourseDuration from '../../helpers/getCourseDuration';
import formatCreationDate from '../../helpers/formatCreationDate';
import getAuthorNames from '../../helpers/getAuthorNames';
import { mockedAuthorsList } from '../../constants';
import './CourseInfo.css';

function CourseInfo({ course, btnText, onBtnClick }) {
	const handleBtnClick = () => {
		onBtnClick();
	};

	return (
		<div>
			<div class='course-container'>
				<header>{course.title}</header>
				<div class='bordered-block'>
					<div class='block-text'>{course.description}</div>
					<div class='block-text'>
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
								{getAuthorNames(mockedAuthorsList, course.authors)}
							</p>
						</div>
					</div>
				</div>
				<div className='action-button'>
					<Button text={btnText} onClick={handleBtnClick} />
				</div>
			</div>
		</div>
	);
}

export default CourseInfo;
