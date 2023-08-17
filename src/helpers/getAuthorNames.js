export default function getAuthorNames(mockedAuthorsList, authorIds) {
	const authors = mockedAuthorsList.filter((author) =>
		authorIds.includes(author.id)
	);
	const authorNames = authors.map((author) => author.name.trim());
	const maxLength = 50;
	let displayedNames = authorNames.join(', ');
	if (displayedNames.length > maxLength) {
		displayedNames = displayedNames.substr(0, maxLength).trim() + '...';
	}
	return displayedNames;
}
