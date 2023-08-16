import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import EmptyCourseList from './components/Courses/components/EmptyCourseList/EmptyCourseList';

function App(props) {
	return (
		<div>
			<div>
				<Header />
				{props.auth ? <EmptyCourseList /> : <Courses />}
			</div>
		</div>
	);
}

export default App;
