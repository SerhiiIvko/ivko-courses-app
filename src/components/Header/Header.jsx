import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import './Header.css';
import { fetchUserData } from '../../services';

const Header = ({ removeToken }) => {
	const [userData, setUserData] = useState(null);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const isLoggedIn = () => {
		return !!localStorage.getItem('result');
	};

	useEffect(() => {
		if (isLoggedIn()) {
			fetchUserData()
				.then((data) => {
					setUserData(data);
				})
				.catch((err) => {
					setError(err.message);
				});
		}
	}, [navigate]);

	const handleLogout = () => {
		removeToken();
	};

	return (
		<div>
			<header className='header'>
				<div className='logo'>
					<Logo alt='Logo' />
				</div>
				{isLoggedIn() && userData ? (
					<>
						<span>
							Logged in as{' '}
							{userData.result.role === 'user' && userData.result.name
								? userData.result.name
								: 'admin'}
						</span>
						<Button text='LOGOUT' onClick={handleLogout} />
					</>
				) : (
					error && <span>Error: {error}</span>
				)}
			</header>
		</div>
	);
};

export default Header;
