export async function login(name, email, password) {
	const response = await fetch('http://localhost:4000/login', {
		method: 'POST',
		body: JSON.stringify({ name, email, password }),
		headers: { 'Content-Type': 'application/json' },
	});
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
	const response = await fetch('http://localhost:4000/courses/add', {
		method: 'POST',
		body: JSON.stringify(courseData),
		headers: { 'Content-Type': 'application/json' },
	});
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
	const response = await fetch('http://localhost:4000/courses/{id}', {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});
	const data = await response.json();
	return data;
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
	const response = await fetch('http://localhost:4000/courses/{id}', {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
	});
	const data = await response.json();
	return data;
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
	const response = await fetch('http://localhost:4000/authors/add', {
		method: 'POST',
		body: JSON.stringify(authorData),
		headers: { 'Content-Type': 'application/json' },
	});
	return await response.json();
}

export async function deleteAuthor(id) {
	const response = await fetch('http://localhost:4000/authors/{id}', {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
	});
	const data = await response.json();
	return data;
}
