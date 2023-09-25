import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { useDispatch } from 'react-redux';
import {
	loginStart,
	loginSuccess,
	loginFailed,
} from '../../store/user/authSlice';
import { login } from '../../services';
import './Login.css';

function Login({ setToken }) {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState('');
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();
	const name = null;

	const handleSubmit = async (e) => {
		e.preventDefault();
		const validationErrors = validateInputs();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}
		dispatch(loginStart());

		try {
			const data = await login(name, email, password);
			if (!data.result || data.result === 'Invalid data.') {
				const errorMessage = data.errors
					? data.errors.join(', ')
					: 'Unsuccessful login attempt!';
				setErrors({ server: errorMessage });
				dispatch(loginFailed(errorMessage));
				alert('Login failed! Check email and password and try again!');
				navigate('/login');
			} else {
				dispatch(loginSuccess(data));
				setToken({ token: data.result });
				navigate('/courses/all');
			}
		} catch (error) {
			console.error(error);
		}
	};

	const validateInputs = () => {
		const errors = {};

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
			<h1>Login</h1>
			<div>
				<div className='form'>
					<br />
					<label htmlFor='email'>Email:</label>
					<Input
						type='email'
						id='email'
						name='email'
						value={email}
						onChange={handleInputChange}
					/>
					{errors.email && <p className='error'>{errors.email}</p>}
					<br />
					<label htmlFor='password'>Password:</label>
					<Input
						type='password'
						id='password'
						name='password'
						value={password}
						onChange={handleInputChange}
					/>
					{errors.password && <p className='error'>{errors.password}</p>}
					<p>
						If you don't have an account you may{' '}
						<Link to={{ pathname: '/registration' }}>Registration</Link>
					</p>
					<br />
					<div className='btn'>
						<Button
							className='btn_container'
							text='LOGIN'
							onClick={handleSubmit}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

Login.propTypes = {
	setToken: PropTypes.func.isRequired,
};

export default Login;
