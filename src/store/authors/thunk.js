import { getAuthors } from '../../services';

const getAllAuthors = () => {
	return async function (dispatch) {
		const authorssFromServer = await getAuthors();

		dispatch({
			type: 'getAllAuthors',
			payload: {
				students: authorssFromServer,
			},
		});
	};
};
