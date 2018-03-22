import service from '../core/fetch'

export default {
	getQuotes (data) {
		return service.get('/static/quotes.json', data);
	}
}