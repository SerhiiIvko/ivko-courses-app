export default function getAuthorNames(authors, authorIds) {
	const selectedAuthors = authors
		? authors.filter((author) => authorIds.includes(author.id))
		: [];
	const authorNames = selectedAuthors.map((author) => author.name.trim());
	const maxLength = 50;
	let displayedNames = authorNames.join(', ');
	if (displayedNames.length > maxLength) {
		displayedNames = displayedNames.substr(0, maxLength).trim() + '...';
	}
	console.log('name inside getAuthorName: ', displayedNames);
	return displayedNames;
}
