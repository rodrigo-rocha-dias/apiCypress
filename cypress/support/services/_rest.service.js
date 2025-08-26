export default class Rest {

    static get(endpoint) {
        return cy.request({
            method: "GET",
            url: endpoint,
            failOnStatusCode: false
        })
    }

    static get_query_param(endpoint, queryParam) {
        return cy.request({
            method: "GET",
            url: endpoint,
            qs: queryParam,
            failOnStatusCode: false
        })
    }

    static post(endpoint, body) {
        return cy.request({
            method: "POST",
            url: endpoint,
            body: body,
            failOnStatusCode: false
        })
    }

    static put(endpoint, body) {
        return cy.request({
            method: "PUT",
            url: endpoint,
            body: body,
            failOnStatusCode: false
        })
    }

    static patch(endpoint, body) {
        return cy.request({
            method: "PATCH",
            url: endpoint,
            body: body,
            failOnStatusCode: false
        })
    }

    static delete(endpoint) {
        return cy.request({
            method: "DELETE",
            url: endpoint,
            failOnStatusCode: false
        })
    }

    static delete_with_body(endpoint, body) {
        return cy.request({
            method: "DELETE",
            url: endpoint,
            body: body,
            failOnStatusCode: false
        })
    }
}