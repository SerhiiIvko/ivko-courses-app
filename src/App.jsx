import React from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import EmptyCourseList from './components/Courses/components/EmptyCourseList/EmptyCourseList';
import './App.css';

function App() {
	const auth = false;
	return (
		<div>
			<div>
				<Header />
				{auth ? <EmptyCourseList /> : <Courses />}
			</div>
		</div>
	);
}

export default App;
