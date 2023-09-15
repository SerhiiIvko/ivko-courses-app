import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

const AuthorItem = () => {
	const [authorName, setAuthorName] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const author = {
			id: uuidv4(),
			authorName,
		};
		console.log(author);
		setAuthorName(authorName);
	};

	return (
		<div className='main'>
			<h2>Authors:</h2>
			<div>
				<div>
					<Input
						label='Author Name:'
						id='authorName'
						type='text'
						name='authorName'
						value={authorName}
					/>
					<Button
						text='CREATE AUTHOR'
						onClick={(e) => handleSubmit(e.target.value)}
					/>
				</div>

				<br />
				<div>
					<h3>Author list:</h3>
				</div>
			</div>
			<br></br>
			<div>
				<h2>Course Authors</h2>
			</div>
		</div>
	);
};

AuthorItem.propTypes = {
	author: PropTypes.shape({
		id: PropTypes.string.isRequired,
		authorName: PropTypes.string.isRequired,
	}).isRequired,
};

export default AuthorItem;
