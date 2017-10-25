import service from '../core/fetch'

export default {
	loginIn (data) {
		return service.get('/login', {params: data});
	}
}