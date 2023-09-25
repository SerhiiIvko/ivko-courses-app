import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
	const userRole = useSelector((state) => state.auth.role.result);
	console.log('ROLE IN PRIVATE ROUTER', userRole);
	const isAuth = useSelector((state) => state.auth.isAuth);

	return isAuth && userRole === 'admin' ? children : <Navigate to='/login' />;
}

export default PrivateRoute;
