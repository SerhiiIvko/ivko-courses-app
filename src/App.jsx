import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import useToken from './helpers/useToken';
import './App.css';

function App() {
	const { token, name, saveToken, removeToken } = useToken();

	return (
		<div>
			<Header name={name} logout={removeToken} />
			<Routes>
				{!token && <Route path='/' element={<Login setToken={saveToken} />} />}
				{token ? (
					<>
						<Route path='/courses' element={<Courses />} />
						<Route path='/courses/add' element={<CreateCourse />} />
					</>
				) : (
					<>
						<Route path='/login' element={<Login setToken={saveToken} />} />
						<Route path='/registration' element={<Registration />} />
					</>
				)}
			</Routes>
		</div>
	);
}

export default App;
