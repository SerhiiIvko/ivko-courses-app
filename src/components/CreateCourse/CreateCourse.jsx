import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import AuthorItem from './components/AuthorItem/AuthorItem';
import { mockedCoursesList } from '../../constants';

const CreateCourse = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [creationDate, setCreationDate] = useState('');
	const [duration, setDuration] = useState('');
	const [authors, setAuthors] = useState([]);
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const validationErrors = validateInputs();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		const courseData = {
			id: uuidv4(),
			title,
			description,
			creationDate,
			duration: parseInt(duration, 10),
			authors,
		};

		mockedCoursesList.push(courseData);

		console.log(courseData);

		setTitle('');
		setDescription('');
		setCreationDate('');
		setDuration('');
		setAuthors([]);

		navigate('/courses');
	};
	const validateInputs = () => {
		const errors = {};

		if (!title.trim()) {
			errors.title = 'Title is required';
		}

		if (!description.trim()) {
			errors.description = 'Description is required';
		}
		if (!duration.trim()) {
			errors.duration = 'Duration is required';
		}

		return errors;
	};

	const handleCancel = () => {
		navigate('/courses');
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
		switch (name) {
			case 'title':
				setTitle(value);
				break;
			case 'description':
				setDescription(value);
				break;
			case 'duration':
				setDuration(value);
				break;
			default:
				break;
		}
	};

	return (
		<div>
			<h1>Create Course</h1>
			<form onSubmit={handleSubmit}>
				<Input
					label='Title:'
					id='title'
					value={title}
					onChange={handleInputChange}
				/>
				{errors.title && <p className='error'>{errors.title}</p>}
				<Input
					label='Description:'
					id='description'
					name='description'
					value={description}
					onChange={handleInputChange}
					type='textarea'
				/>
				{errors.description && <p className='error'>{errors.description}</p>}
				<Input
					label='Creation Date:'
					id='creationDate'
					name='creationDate'
					value={creationDate}
					onChange={(e) => setCreationDate(e.target.value)}
					type='date'
				/>
				<Input
					label='Duration (minutes):'
					id='duration'
					name='duration'
					value={duration}
					onChange={(e) => setDuration(e.target.value)}
					type='number'
				/>
				{errors.duration && <p className='error'>{errors.duration}</p>}
				<Input
					label='Authors (comma-separated author IDs):'
					id='authors'
					name='authors'
					value={authors.join(', ')}
					onChange={(e) =>
						setAuthors(e.target.value.split(',').map((id) => id.trim()))
					}
				/>
				<p>Authors:</p>
				{/* <AuthorItem /> */}
				<Button text='CANCEL' onClick={handleCancel} />
				<Button type='submit' text='CREATE COURSE' onClick={handleSubmit} />
			</form>
		</div>
	);
};

export default CreateCourse;
