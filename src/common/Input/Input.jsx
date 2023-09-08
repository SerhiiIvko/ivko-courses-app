import React from 'react';
import './Input.css';

function Input({
	type = 'text',
	id,
	name,
	value,
	onChange,
	label,
	placeholder,
}) {
	return (
		<div className='form'>
			{label && (
				<label className='label' htmlFor={id}>
					{label}
				</label>
			)}
			<input
				type={type}
				id={id}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
		</div>
	);
}

export default Input;
