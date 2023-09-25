// import React from 'react';
// import Logo from './components/Logo/Logo';
// import Button from '../../common/Button/Button';
// import { useSelector, useDispatch } from 'react-redux';
// import { logoutUser } from '../../store/user/thunk';
// import './Header.css';

// const Header = ({ removeToken }) => {
// 	const user = useSelector((state) => state.auth.data?.user);
// 	const token = useSelector((state) => state.auth.data?.token);
// 	const dispatch = useDispatch();

// 	const handleLogout = () => {
// 		dispatch(logoutUser(token));
// 		removeToken();
// 	};

// 	return (
// 		<div>
// 			<header className='header'>
// 				<div className='logo'>
// 					<Logo alt='Logo' />
// 				</div>
// 				{token ? (
// 					<>
// 						<span>Logged in as {user.name}</span>
// 						<Button text='LOGOUT' onClick={handleLogout} />
// 					</>
// 				) : null}
// 			</header>
// 		</div>
// 	);
// };

// export default Header;
import React from 'react';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../store/user/thunk';
import './Header.css';

const Header = ({ removeToken }) => {
	const user = useSelector((state) => state.auth.data?.user);
	const token = useSelector((state) => state.auth.data?.token);
	const dispatch = useDispatch();
	console.log('current user is: ', user);
	const isLoggedIn = () => {
		return !!localStorage.getItem('result');
	};

	const handleLogout = () => {
		dispatch(logoutUser(token));
		removeToken();
	};

	return (
		<div>
			<header className='header'>
				<div className='logo'>
					<Logo alt='Logo' />
				</div>
				{isLoggedIn() ? (
					<>
						<span>Logged in as </span>
						<Button text='LOGOUT' onClick={handleLogout} />
					</>
				) : null}
			</header>
		</div>
	);
};

export default Header;
