export default function formatDuration(durationInMinutes) {
	const hours = Math.floor(durationInMinutes / 60);
	const minutes = durationInMinutes % 60;
	return `${hours.toString().padStart(2, '0')}:${minutes
		.toString()
		.padStart(2, '0')}`;
}
