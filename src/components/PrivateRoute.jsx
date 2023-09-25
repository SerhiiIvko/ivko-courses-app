// import React from 'react';
// import { getUserRole } from

// function PrivateRoute({ children }) {
// 	const auth = getUserRole();
// 	return auth ? children : <Navigate to='/login' />;
// }

// export default PrivateRoute;

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
	const userRole = useSelector((state) => state.auth.role);
	const isAuth = useSelector((state) => state.auth.isAuth);

	return isAuth && userRole === 'admin' ? children : <Navigate to='/login' />;
}

export default PrivateRoute;
