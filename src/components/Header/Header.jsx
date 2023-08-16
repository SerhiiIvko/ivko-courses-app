import React from 'react';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import './Header.css';

const Header = (props) => {
	return (
		<div>
			<header className='header'>
				<div className='logo'>
					<Logo alt='Logo' />
				</div>
				<Button text='LOGOUT' />
			</header>
		</div>
	);
};

export default Header;
