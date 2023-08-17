import React from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import './Search.css';

function SearchBar() {
	return (
		<div className='input'>
			<Input />
			<Button text='SEARCH' />
		</div>
	);
}

export default SearchBar;
