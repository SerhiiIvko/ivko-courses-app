export default function formatCreationDate(inputDate) {
	const [month, day, year] = inputDate.split('/');
	const date = new Date(`${year}-${month}-${day}`);
	const formattedDate = `${date.getDate()}.${
		date.getMonth() + 1
	}.${date.getFullYear()}`;
	const newStr = inputDate.replace(/\d{2}\/\d{2}\/\d{4}/, formattedDate);
	return newStr;
}
