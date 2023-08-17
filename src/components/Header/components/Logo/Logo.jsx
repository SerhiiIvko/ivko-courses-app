import React from 'react';
import logo from './logo.png';
import './Logo.css';

const Logo = ({ alt }) => {
	return <img src={logo} alt={alt} className='Logo' />;
};

export default Logo;
