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
	},
	delTag (data) {
		return service.post('/article/delTag', data);
	},
	addArticle (data) {
		return service.post('/article/addArticle', data);
	},
	getArticleList (data) {
		return service.get('/article/getArticleList', { params: data } );
	},
	delArticle (data) {
		return service.get('/article/delArticle', { params: data } );
	}
}