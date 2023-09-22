import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../common/Button/Button';
import getCourseDuration from '../../../../helpers/getCourseDuration';
import formatCreationDate from '../../../../helpers/formatCreationDate';
import getAuthorNames from '../../../../helpers/getAuthorNames';
import { mockedAuthorsList } from '../../../../constants';
import './CourseCard.css';

function CourseCard({ course, btext, onCardClick, deleteClick, id }) {
	const navigate = useNavigate();
	const handleCardClick = () => {
		onCardClick(course);
	};

	const handleEditClick = () => {
		navigate('/courses/' + { id });
		// editClick(course);
	};

	const handleDeleteClick = () => {
		deleteClick(course);
	};

	return (
		<div>
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
									<div className='author-names'>
										<strong>Authors: </strong>
										{getAuthorNames(mockedAuthorsList, course.authors)}
									</div>
									<p>
										<strong>Duration: </strong>
										{getCourseDuration(course.duration)} hours
									</p>
									<p>
										<strong>Created: </strong>
										{formatCreationDate(course.creationDate)}
									</p>
									<Button text={btext} onClick={handleCardClick} />
									<br />
									<br />
									<FontAwesomeIcon icon={faTrash} onClick={handleDeleteClick} />
									<br />
									<br />
									<FontAwesomeIcon
										icon={faPencilAlt}
										onClick={handleEditClick}
									/>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default CourseCard;
