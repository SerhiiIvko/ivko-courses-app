import { Route, Navigate } from 'react-router-dom';
import useToken from './useToken';

function PrivateRoute({ component: Component, ...rest }) {
	const { token } = useToken();
	return (
		<Route
			{...rest}
			render={(props) =>
				token ? (
					<Component {...props} />
				) : (
					<Navigate to='/login' state={{ from: props.location }} replace />
				)
			}
		/>
	);
}

export default PrivateRoute;
