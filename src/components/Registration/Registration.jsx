import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { register } from '../../services';
import './Registration.css';

function Registration() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();

		const validationErrors = validateInputs();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		try {
			const result = await register(name, email, password);

			if (result.result) {
				console.log(result);
				navigate('/login');
			} else {
				alert('Unsuccessfull');
				setErrors({ server: result.errors.join(', ') });
			}
		} catch (error) {
			console.error(error);
		}
	};

	const validateInputs = () => {
		const errors = {};

		if (!name.trim()) {
			errors.name = 'Name is required';
		}

		if (!email.trim()) {
			errors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			errors.email = 'Email address is invalid';
		}

		if (!password.trim()) {
			errors.password = 'Password is required';
		} else if (password.length < 6) {
			errors.password = 'Password must be at least 6 characters long';
		}

		return errors;
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
		switch (name) {
			case 'name':
				setName(value);
				break;
			case 'email':
				setEmail(value);
				break;
			case 'password':
				setPassword(value);
				break;
			default:
				break;
		}
	};

	return (
		<div className='container'>
			<h1>Registration</h1>
			<div className='form'>
				{errors.server && <p className='error'>{errors.server}</p>}
				<div>
					<label htmlFor='name'>Name:</label>
					<Input
						type='text'
						id='name'
						name='name'
						value={name}
						onChange={handleInputChange}
					/>
					{errors.name && <p className='error'>{errors.name}</p>}
				</div>
				<div>
					<label htmlFor='email'>Email:</label>
					<Input
						type='email'
						id='email'
						name='email'
						value={email}
						onChange={handleInputChange}
					/>
					{errors.email && <p className='error'>{errors.email}</p>}
				</div>
				<div>
					<label htmlFor='password'>Password:</label>
					<Input
						type='password'
						id='password'
						name='password'
						value={password}
						onChange={handleInputChange}
					/>
					{errors.password && <p className='error'>{errors.password}</p>}
				</div>
				<p>
					If you have an account you may{' '}
					<Link to={{ pathname: '/login' }}>Login</Link>
				</p>
				<div className='btn'>
					<Button
						className='btn_container'
						text='REGISTER'
						onClick={handleSubmit}
					/>
				</div>
			</div>
		</div>
	);
}

export default Registration;
