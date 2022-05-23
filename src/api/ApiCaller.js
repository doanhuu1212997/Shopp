import { axiosClient } from './AxiosClient';

export default function ApiCaller(
	method = 'GET',
	url,
	data = null,
	params= null,
	responseType = null) {
	return axiosClient({
		method,
		url,
		data,
		params,
		responseType,
	});
}
