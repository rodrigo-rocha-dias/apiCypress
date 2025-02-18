import RequestManager from "../../../utils/requestManager";
import config from "../../../config/env.config.json";

const ambiente = Cypress.env("ambiente") || "hml";
const baseUrl = config.placeholder?.ambiente?.[ambiente]?.recursos?.baseUrl;
const requestManager = new RequestManager();

class Recurso {

    criarRecurso(title, bodyRequest, userId) {
        return requestManager.performRequest({
            method: "POST",
            failOnStatusCode: false,
            url: `${baseUrl}/posts`,
            headers: {
                "accept": "*/*",
                "Content-Type": "application/json"
            },
            body: {
                title: title,
                body: bodyRequest,
                userId: userId
            }
        })
    }

    buscarRecurso(id) {
        return requestManager.performRequest({
            method: "GET",
            failOnStatusCode: false,
            url: `${baseUrl}/posts/${id}`,
            headers: {
                "accept": "*/*",
                "Content-Type": "application/json"
            }
        })
    }

    atualizarRecurso(id, title, bodyRequest, userId) {
        return requestManager.performRequest({
            method: "PUT",
            failOnStatusCode: false,
            url: `${baseUrl}/posts/${id}`,
            headers: {
                "accept": "*/*",
                "Content-Type": "application/json"
            },
            body: {
                "id": id,
                "title": title,
                "body": bodyRequest,
                "userId": userId
            }
        })
    }

    deletarRecurso(id) {
        return requestManager.performRequest({
            method: "DELETE",
            failOnStatusCode: false,
            url: `${baseUrl}/posts/${id}`,
            headers: {
                "accept": "*/*",
                "Content-Type": "application/json"
            }
        })
    }
}

export default Recurso;
