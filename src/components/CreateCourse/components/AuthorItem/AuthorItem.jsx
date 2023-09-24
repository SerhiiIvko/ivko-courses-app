import React, { useState, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import authorsReducer from '../../../../store/authors/authorsReducer';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';
import { getAuthors, createAuthor, deleteAuthor } from '../../../../services';
import * as types from '../../../../store/authors/types';

const AuthorItem = ({ courseAuthors, setCourseAuthors }) => {
	const [name, setAuthorName] = useState('');
	const [errors, setErrors] = useState({});
	const [state, dispatch] = useReducer(authorsReducer, { authors: [] });

	const handleSubmit = async (e) => {
		e.preventDefault();
		const validationErrors = validateInputs();

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		const authorData = {
			name,
		};

		try {
			const newAuthor = await createAuthor(authorData);
			if (newAuthor) {
				setAuthorName('');
				dispatch({
					type: types.ADD_AUTHOR,
					payload: newAuthor,
				});
				console.log(authorData);
				const data = await getAuthors();
				dispatch({
					type: types.GET_AUTHORS,
					payload: data,
				});
			} else {
				console.log('ERROR data response create course: ', authorData);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const fetchAuthors = async () => {
		try {
			const data = await getAuthors();
			dispatch({
				type: types.GET_AUTHORS,
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchAuthors();
	}, [dispatch]);

	const validateInputs = () => {
		const errors = {};
		if (!name.trim() | (name.trim().length < 2)) {
			errors.name =
				'Name is required! Name length should contain a minimum of 2 symbols!';
		}
		return errors;
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));

		switch (name) {
			case 'name':
				setAuthorName(value);
				break;
			default:
				break;
		}
	};

	const handleAddAuthorToCourse = (author) => {
		setCourseAuthors((prevCourseAuthors) => [...prevCourseAuthors, author]);
	};

	const handleDeleteAuthorFromCourse = (authorId) => {
		setCourseAuthors((prevCourseAuthors) =>
			prevCourseAuthors.filter((author) => author.id !== authorId)
		);
	};

	const handleDeleteAuthor = async (id) => {
		try {
			await deleteAuthor(id);
			console.log(id);

			dispatch({
				type: types.DELETE_AUTHOR,
				payload: id,
			});

			const data = await getAuthors();
			dispatch({
				type: types.GET_AUTHORS,
				payload: data,
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className='main'>
			<h2>Authors:</h2>
			<div>
				<div>
					<Input
						label='Author Name:'
						id='name'
						type='text'
						name='name'
						value={name}
						onChange={handleInputChange}
					/>
					{errors.name && <p className='error'>{errors.name}</p>}
					<Button text='CREATE AUTHOR' onClick={handleSubmit} />
				</div>

				<br />
				<div>
					<h3>Authors list:</h3>
					<div>
						{Array.isArray(state.authors.result) &&
							state.authors.result.map((author) => (
								<div key={author.id}>
									Name: {author.name}
									<div onClick={() => handleAddAuthorToCourse(author)}>+</div>
									<div>
										<FontAwesomeIcon
											icon={faTrash}
											onClick={() => handleDeleteAuthor(author.id)}
										/>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
			<br />
			<div>
				<h2>Course Authors List:</h2>
				<ul>
					{courseAuthors.map((author) => (
						<li key={author.id}>
							{author.name}
							<FontAwesomeIcon
								icon={faTrash}
								onClick={() => handleDeleteAuthorFromCourse(author.id)}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

AuthorItem.propTypes = {
	courseAuthors: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	).isRequired,
	setCourseAuthors: PropTypes.func.isRequired,
};

export default AuthorItem;
