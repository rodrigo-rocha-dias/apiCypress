import Rest from './../../cypress/support/services/_rest.service.js';

// req 
const url = 'https://jsonplaceholder.typicode.com/posts';

export default class RecursoService extends Rest {

    static post_recurso(body) {
        return super.post(url, body);
    }

    static get_recurso(id) {
        return super.get(`${url}/${id}`);
    }

    static put_recurso(id, body) {
        return super.put(`${url}/${id}`, body);
    }

    static delete_recurso(id) {
        return super.delete(`${url}/${id}`);
    }

}