import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../../../common/Input/Input';

const AuthorItem = ({ author }) => {
	const [authorName, setAuthorName] = useState('');
	const handleSubmit = async (e) => {
		e.preventDefault();
		const author = {
			authorName,
		};
		console.log(author);
		setAuthorName('');
	};

	return (
		<div className='author-item'>
			<Input
				label='Name:'
				id='authorName'
				value={authorName}
				onChange={(e) => handleSubmit(e.target.value)}
			/>
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
