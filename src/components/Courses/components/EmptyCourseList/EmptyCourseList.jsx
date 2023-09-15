import React from 'react';
import Button from '../../../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import './EmptyCourseList.css';

function EmptyCourseList() {
	const navigate = useNavigate();

	const handleAddCourseClick = () => {
		navigate('/courses/add');
	};

	return (
		<div className='emptyList'>
			<h1>Your List Is Empty</h1>
			<p>Please use 'Add new course' button to add your first course</p>
			<br />
			<Button text='ADD NEW COURSE' onClick={handleAddCourseClick} />
		</div>
	);
}

export default EmptyCourseList;
