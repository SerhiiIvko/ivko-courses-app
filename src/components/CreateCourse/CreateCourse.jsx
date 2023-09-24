import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import AuthorItem from './components/AuthorItem/AuthorItem';
import * as types from '../../store/courses/types';
import { createCourse } from '../../services';

const CreateCourse = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [creationDate, setCreationDate] = useState('');
	const [duration, setDuration] = useState('');
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const currentDate = new Date();
	const formattedDate = `${currentDate.getFullYear()}-${
		currentDate.getMonth() + 1
	}-${currentDate.getDate()}`;
	console.log('generated creation date: ', formattedDate);

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
			authors: courseAuthors.map((author) => author.id),
		};

		try {
			const data = await createCourse(courseData);

			if (data) {
				dispatch({
					type: types.ADD_COURSE,
					payload: data,
				});
				console.log(courseData);
				setTitle('');
				setDescription('');
				setCreationDate(formattedDate);
				setDuration('');
				setCourseAuthors([]);
				navigate('/courses/all');
			} else {
				console.log('ERROR data response create course: ', data);
				navigate('/courses/add');
			}
		} catch (error) {
			console.error(error);
		}
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
		navigate('/courses/all');
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
		<div className='createCourse'>
			<h1>Create Course</h1>
			<br />
			<div>
				<form onSubmit={handleSubmit}>
					<Input
						label='Title:'
						id='title'
						name='title'
						value={title}
						onChange={handleInputChange}
						type='text'
					/>
					{errors.title && <p className='error'>{errors.title}</p>}
					<Input
						label='Description:'
						id='description'
						name='description'
						value={description}
						onChange={handleInputChange}
						type='text'
					/>
					{errors.description && <p className='error'>{errors.description}</p>}
					<Input
						label='Duration (minutes):'
						id='duration'
						name='duration'
						value={duration}
						onChange={handleInputChange}
						type='number'
					/>
					{errors.duration && <p className='error'>{errors.duration}</p>}
					<br />
					<div>
						<AuthorItem
							courseAuthors={courseAuthors}
							setCourseAuthors={setCourseAuthors}
						/>
					</div>
					<br />
					<Button text='CANCEL' onClick={handleCancel} />
					<Button type='submit' text='CREATE COURSE' onClick={handleSubmit} />
				</form>
			</div>
		</div>
	);
};

export default CreateCourse;
