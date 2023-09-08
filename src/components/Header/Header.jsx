import React from 'react';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import './Header.css';

const Header = ({ name, logout }) => {
	return (
		<div>
			<header className='header'>
				<div className='logo'>
					<Logo alt='Logo' />
				</div>
				{name && (
					<div>
						<span>{name}</span>
						<Button text='LOGOUT' onClick={logout} />
					</div>
				)}
			</header>
		</div>
	);
};

export default Header;
