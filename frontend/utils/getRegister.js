export default () => {
	return fetch('https://reactnative.dev/movies.json')
		.then((response) => response.json())
		.then((responseJson) => {
			console.log(responseJson.movies)
			return responseJson.movies;
		})
		.catch((error) => {
			console.error(error);
		});
}