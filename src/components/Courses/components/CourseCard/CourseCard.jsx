import React, { useState } from 'react';
import Button from '../../../../common/Button/Button';
import CourseInfo from '../../../CourseInfo/CourseInfo';
import { mockedAuthorsList } from '../../../../constants';
import getCourseDuration from '../../../../helpers/getCourseDuration';
import formatCreationDate from '../../../../helpers/formatCreationDate';
import './CourseCard.css';

function CourseCard({ course }) {
	const [showOtherComponent, setShowOtherComponent] = useState(false);

	const handleClick = () => {
		setShowOtherComponent(true);
	};
	return (
		<div>
			{showOtherComponent ? (
				<CourseInfo />
			) : (
				<div className='wrapper'>
					<table className='customTable'>
						<tbody>
							<tr>
								<td>
									<h2>{course.title}</h2>
								</td>
							</tr>
							<tr>
								<td>
									<p className='descr'>{course.description}</p>
								</td>
								<td>
									<div className='authors'>
										<div>
											<strong>Authors: </strong>
											{getAuthorNames(course.authors)}
										</div>
										<p>
											<strong>Duration: </strong>
											{getCourseDuration(course.duration)} hours
										</p>
										<p>
											<strong>Created: </strong>
											{formatCreationDate(course.creationDate)}
										</p>
										<Button text='SHOW COURSE' onClick={handleClick} />
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}

function getAuthorNames(authorIds) {
	const authors = mockedAuthorsList.filter((author) =>
		authorIds.includes(author.id)
	);
	return authors.map((author) => author.name).join(', ');
}

// function formatDuration(durationInMinutes) {
// 	const hours = Math.floor(durationInMinutes / 60);
// 	const minutes = durationInMinutes % 60;
// 	return `${hours.toString().padStart(2, '0')}:${minutes
// 		.toString()
// 		.padStart(2, '0')}`;
// }

export default CourseCard;
