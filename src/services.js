export async function login(name, email, password, role) {
	const response = await fetch('http://localhost:4000/login', {
		method: 'POST',
		body: JSON.stringify({ name, email, password, role }),
		headers: { 'Content-Type': 'application/json' },
	});
	console.log('login response data: ', response);
	return await response.json();
}

export async function logout() {
	const accessToken = localStorage.getItem('result');
	const token = accessToken.split(' ')[1].slice(0, -2);
	const URL = `http://localhost:4000/logout/${token}`;
	console.log('token for removing', token);
	const response = await fetch(URL, {
		method: 'DELETE',
		Authorization: `Bearer ${token}`,
		body: JSON.stringify(token),
		headers: { 'Content-Type': 'application/json' },
	});
	console.log(response);
	return await response.json();
}

export async function register(name, email, password) {
	const newUser = { name, email, password };
	const response = await fetch('http://localhost:4000/register', {
		method: 'POST',
		body: JSON.stringify(newUser),
		headers: { 'Content-Type': 'application/json' },
	});
	return await response.json();
}

export async function createCourse(courseData) {
	console.log('course data: ', courseData);
	const accessToken = localStorage.getItem('result');
	const token = accessToken.split(' ')[1].slice(0, -2);
	if (!accessToken) {
		throw new Error('Access token not found');
	}

	const response = await fetch('http://localhost:4000/courses/add', {
		method: 'POST',
		body: JSON.stringify(courseData),
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});
	if (response.status === 401) {
		throw new Error('Unauthorized');
	}
	if (!response.ok) {
		throw new Error(`Network response was not ok (${response.status})`);
	}
	return await response.json();
}

export async function getCourses() {
	const response = await fetch('http://localhost:4000/courses/all', {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});
	const data = await response.json();
	return data;
}

export async function getCourse(id) {
	const accessToken = localStorage.getItem('result');
	const token = accessToken.split(' ')[1].slice(0, -2);
	console.log('course for loading: ', id);
	if (!accessToken) {
		throw new Error('Access token not found');
	}
	const URL = `http://localhost:4000/courses/${id}`;
	const response = await fetch(URL, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});
	if (response.status === 401) {
		throw new Error('Unauthorized');
	}
	if (!response.ok) {
		throw new Error(`Network response was not ok (${response.status})`);
	}
	if (response.ok) {
		console.log('Course item with id' + { id } + 'successfully loaded!');
	}
	return response.json();
}

export async function editCourse(id, courseData) {
	const response = await fetch('http://localhost:4000/courses/{id}', {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
	});
	const data = await response.json(courseData);
	return data;
}

export async function deleteCourse(id) {
	const accessToken = localStorage.getItem('result');
	const token = accessToken.split(' ')[1].slice(0, -2);
	console.log('course for deleting: ', id);
	if (!accessToken) {
		throw new Error('Access token not found');
	}
	const URL = `http://localhost:4000/courses/${id}`;
	const response = await fetch(URL, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});
	if (response.status === 401) {
		throw new Error('Unauthorized');
	}
	if (!response.ok) {
		throw new Error(`Network response was not ok (${response.status})`);
	}
	if (response.ok) {
		console.log('Course item with id' + { id } + 'successfully deleted!');
	}
	return await response.json();
}

export async function getAuthors() {
	const response = await fetch('http://localhost:4000/authors/all', {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});
	const data = await response.json();
	return data;
}

export async function createAuthor(authorData) {
	const accessToken = localStorage.getItem('result');
	const token = accessToken.split(' ')[1].slice(0, -2);
	if (!accessToken) {
		throw new Error('Access token not found');
	}
	const response = await fetch('http://localhost:4000/authors/add', {
		method: 'POST',
		body: JSON.stringify(authorData),
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});
	if (response.status === 401) {
		throw new Error('Unauthorized');
	}
	if (!response.ok) {
		throw new Error(`Network response was not ok (${response.status})`);
	}
	return await response.json();
}

export async function deleteAuthor(id) {
	const accessToken = localStorage.getItem('result');
	const token = accessToken.split(' ')[1].slice(0, -2);
	console.log('author for deleting: ', id);
	if (!accessToken) {
		throw new Error('Access token not found');
	}
	const URL = `http://localhost:4000/authors/${id}`;
	const response = await fetch(URL, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});
	if (response.status === 401) {
		throw new Error('Unauthorized');
	}
	if (!response.ok) {
		throw new Error(`Network response was not ok (${response.status})`);
	}
	if (response.ok) {
		console.log('item with id' + { id } + 'successfully deleted!');
	}
	return await response.json();
}

export async function editAuthor(id, authorData) {
	const accessToken = localStorage.getItem('result');
	const token = accessToken.split(' ')[1].slice(0, -2);
	if (!accessToken) {
		throw new Error('Access token not found');
	}
	const response = await fetch('http://localhost:4000/authors/' + { id }, {
		method: 'PUT',
		body: JSON.stringify(authorData),
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});
	if (response.status === 401) {
		throw new Error('Unauthorized');
	}
	if (!response.ok) {
		throw new Error(`Network response was not ok (${response.status})`);
	}
	return await response.json();
}

export const fetchUserData = async (token) => {
	const response = await fetch('/users/me', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
	});
	console.log('User data from API response: ', response);
	if (response.ok) {
		const data = await response.json();
		return data;
	}

	throw new Error('Failed to fetch user data');
};
