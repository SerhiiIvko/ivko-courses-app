import { React } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Courses from './components/Courses/Courses';
import useToken from './helpers/useToken';
import './App.css';

function App() {
	const { token, saveToken } = useToken();

	return (
		<div>
			<Header />
			<Routes>
				{!token && (
					<>
						<Route path='/login' element={<Login setToken={saveToken} />} />
						<Route path='/registration' element={<Registration />} />
						<Route path='*' element={<Navigate to='/login' />} />
					</>
				)}
				{token && (
					<>
						<Route path='/courses/all' element={<Courses />} />
						<Route path='*' element={<Navigate to='/courses/all' />} />
					</>
				)}
			</Routes>
		</div>
	);
}

export default App;
