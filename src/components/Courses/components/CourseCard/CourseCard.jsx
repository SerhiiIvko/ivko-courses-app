import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../common/Button/Button';
import getCourseDuration from '../../../../helpers/getCourseDuration';
import formatCreationDate from '../../../../helpers/formatCreationDate';
import * as types from '../../../../store/courses/types';
import './CourseCard.css';

function CourseCard({
	course,
	authors,
	btext,
	onCardClick,
	id,
	onDeleteClick,
}) {
	const navigate = useNavigate();
	console.log('authors for course card: ', authors);

	const handleCardClick = () => {
		onCardClick(course);
	};

	const handleEditClick = () => {
		navigate('/courses/' + { id });
	};

	const handleDeleteCourse = () => {
		onDeleteClick(course.id);
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
										{/* {getAuthorNames(authorS, course.authors)} */}
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
									<div>
										<FontAwesomeIcon
											icon={faTrash}
											onClick={handleDeleteCourse}
										/>
									</div>
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

const mapStateToProps = (state) => ({
	authors: state.authors,
});

const mapDispatchToProps = (dispatch) => ({
	deleteCourse_action: (id) =>
		dispatch({ type: types.DELETE_COURSE, payload: id }),
	getCourses_action: (courses) =>
		dispatch({ type: types.GET_COURSES, payload: courses }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseCard);
