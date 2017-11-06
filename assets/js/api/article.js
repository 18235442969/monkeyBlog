import service from '../core/fetch'

export default {
	upload (data, config) {
		return service.post('/upload', data, config);
	},
	addTag (data) {
		return service.get('/article/addTag', {params: data});
	},
	getTags (data) {
		return service.get('/article/getTags', {params: data});
	}
}