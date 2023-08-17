import React from 'react';
import './Button.css';

export const Button = ({ text, onClick }) => (
	<button className='button' onClick={onClick}>
		{text}
	</button>
);

export default Button;
