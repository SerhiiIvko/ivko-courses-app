import React, { useState } from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import './Search.css';

function SearchBar(props) {
	const [searchQuery, setSearchQuery] = useState('');

	const handleInputChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const handleSearch = () => {
		props.onSearch(searchQuery);
		setSearchQuery('');
	};

	return (
		<div className='input'>
			<Input value={searchQuery} onChange={handleInputChange} />
			<Button text='SEARCH' onClick={handleSearch} />
		</div>
	);
}

export default SearchBar;
