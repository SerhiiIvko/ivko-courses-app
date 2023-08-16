import React from 'react';
import logo from './logo.png';
import styles from './Logo.css';

const Logo = ({ alt }) => {
	return <img src={logo} alt={alt} className={styles.Logo} />;
};

export default Logo;
