import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { fetchUserData } from '../../../services';

jest.mock('../../../services', () => ({
	fetchUserData: jest.fn(),
}));

describe('Header', () => {
	it("should have a logo and user's name", async () => {
		const mockUserData = {
			result: {
				role: 'user',
				name: 'John Doe',
			},
		};

		fetchUserData.mockResolvedValue(mockUserData);

		Storage.prototype.getItem = jest.fn(() => 'mock-token');

		render(<Header removeToken={() => {}} />);

		const logoElement = screen.getByAltText('Logo');
		expect(logoElement).toBeInTheDocument();

		const userName = await screen.findByText('Logged in as John Doe');
		expect(userName).toBeInTheDocument();
	});
});
