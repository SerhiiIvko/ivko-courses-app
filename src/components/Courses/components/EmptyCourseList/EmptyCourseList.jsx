import React from 'react';
import Button from '../../../../common/Button/Button';
import './EmptyCourseList.css';

function EmptyCourseList() {
	return (
		<div className='emptyList'>
			<h1>Your List Is Empty</h1>
			<p>Please use 'Add new course' button to add your first course</p>
			<br />
			<Button text='ADD NEW COURSE' />
		</div>
	);
}

export default EmptyCourseList;
