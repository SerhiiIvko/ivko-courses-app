export default function formatCreationDate(inputDate) {
	const [month, day, year] = inputDate.split('/');
	const date = new Date(`${year}-${month}-${day}`);
	const formattedDate = `${date.getDate().toString().padStart(2, '0')}.${(
		date.getMonth() + 1
	)
		.toString()
		.padStart(2, '0')}.${date.getFullYear()}`;
	const newStr = inputDate.replace(/\d{2}\/\d{2}\/\d{4}/, formattedDate);
	return newStr;
}
