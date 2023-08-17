import React, { useState } from 'react';
import './Input.css';

function Input() {
	const [nameValue, setNameValue] = useState('');

	const handleChange = (event) => {
		setNameValue(event.target.value);
	};

	const handleSubmit = (event) => {
		alert('A name was submitted: ' + nameValue);
		event.preventDefault();
	};

	return (
		<form className='form' onSubmit={handleSubmit}>
			<label>
				<input
					type='text'
					value={nameValue}
					onChange={handleChange}
					size='40'
				/>
			</label>
		</form>
	);
}

export default Input;
