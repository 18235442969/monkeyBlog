import service from '../core/fetch'

export default {
	upload (data, config) {
		return service.post('/upload', data, config);
	}
}