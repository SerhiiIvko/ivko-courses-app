import { useState } from 'react';

const useToken = () => {
	const getToken = () => {
		const tokenString = JSON.parse(localStorage.getItem('result'));
		if (tokenString) {
			return { token: tokenString.token, name: tokenString.name };
		} else {
			return { token: null, name: '' };
		}
	};

	const [tokenData, setTokenData] = useState(getToken());

	const saveToken = (tokenObject) => {
		localStorage.setItem('result', JSON.stringify(tokenObject));
		setTokenData(tokenObject);
	};

	const removeToken = () => {
		localStorage.removeItem('result');
		setTokenData({ token: null, name: '' });
	};

	return {
		token: tokenData.token,
		name: tokenData.name,
		saveToken,
		removeToken,
	};
};

export default useToken;
