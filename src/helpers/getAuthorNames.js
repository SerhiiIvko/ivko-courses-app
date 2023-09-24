export default function getAuthorNames(authors, authorIds) {
	const selectedAuthors = authors
		? authors.filter((author) => authorIds.includes(author.id))
		: [];
	const authorNames = selectedAuthors.map((author) => author.name.trim());
	const maxLength = 50;
	console.log('name inside getAuthorName: ', authorNames);
	let displayedNames = authorNames.join(', ');
	if (displayedNames.length > maxLength) {
		displayedNames = displayedNames.substr(0, maxLength).trim() + '...';
	}
	return displayedNames;
}
