import axios from 'axios';

const accessToken = '4n27A4OCWE19WQVAvruGZFMx3dI6';

export const api = {
	searchFlight(body: SearchFlightInfo) {
		return axios.get(
			`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${body.from}&destinationLocationCode=${body.to}&departureDate=${body.dateDeparture}&adults=${
				body.numberpeople || 1
			}&nonStop=false&max=20`,
			{
				headers: {
					Authorization: 'Bearer ' + accessToken,
				},
			},
		);
	},
};
export async function getAccessToken(): Promise<any> {
	const data = new URLSearchParams({
		grant_type: 'client_credentials',
		client_id: 'HZDKUGwNjqkt5U8QyOF4N9w1VUbC1U6V',
		client_secret: 'OnWkdRcj19jmGNUF',
	});

	const response = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: data.toString(),
	});

	if (!response.ok) {
		throw new Error(`API request failed with status: ${response.status}`);
	}

	return await response.json();
}
