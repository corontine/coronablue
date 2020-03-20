export default () => {
	return fetch('https://coronablue.sls/endpoint/', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			deviceId: 'yourValue',
			timeStamp: 'yourOtherValue',
		}),
	});
}