import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../../../../common/Button/Button';
import { useNavigate } from 'react-router-dom';

import './EmptyCourseList.css';

function EmptyCourseList() {
	const navigate = useNavigate();
	const userRole = useSelector((state) => state.auth.data?.role);
	console.log('user Role is: ', userRole);
	const handleAddCourseClick = () => {
		navigate('/courses/add');
	};

	return (
		<div className='emptyList'>
			<h1>Your List Is Empty</h1>
			<p>Please use 'Add new course' button to add your first course</p>
			<br />
			{userRole === 'admin' && ( // Conditionally render the 'ADD NEW COURSE' button based on the user's role
				<Button text='ADD NEW COURSE' onClick={handleAddCourseClick} />
			)}
			{/* <Button text='ADD NEW COURSE' onClick={handleAddCourseClick} /> */}
		</div>
	);
}

export default EmptyCourseList;
