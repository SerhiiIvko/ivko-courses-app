import React from 'react';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/user/authSlice';
import './Header.css';

const Header = ({ removeToken }) => {
	const user = useSelector((state) => state.auth.data?.user);
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
		removeToken();
	};

	return (
		<div>
			<header className='header'>
				<div className='logo'>
					<Logo alt='Logo' />
				</div>
				{user ? (
					<>
						<span>Logged in as {user.name}</span>
						<Button text='LOGOUT' onClick={handleLogout} />
					</>
				) : null}
			</header>
		</div>
	);
};

export default Header;
