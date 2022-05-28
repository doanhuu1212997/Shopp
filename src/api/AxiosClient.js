import axios from 'axios';
// Set up default config for http requests here
const axiosClient = axios.create({
	baseURL: "http://cfd-reactjs.herokuapp.com",
	headers: {
		'content-type': 'application/json',
	},
});
// Handle all request	
axiosClient.interceptors.request.use(
	(config) => {
		return config
	}

);

// Handle all response
axiosClient.interceptors.response.use(
	(response) => {
		// Edit response config
		if (response && response.data) {
			return response.data
		}
		return response;
	},
	(error) => {
		throw error
	}
);
export default axiosClient