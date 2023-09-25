export default function formatCreationDate(inputDate) {
	if (inputDate) {
		const [month, day, year] = inputDate.split('/');
		const formattedDate =
			`${day?.padStart(2, '0') || ''}.${month?.padStart(2, '0') || ''}` +
			(year ? `.${year}` : '');
		return formattedDate;
	} else {
		return '';
	}
}
