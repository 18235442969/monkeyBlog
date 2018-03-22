import service from '../core/fetch'

export default {
	loginIn (data) {
		return service.post('/login', data);
	}
}