// caminho: cypress/support/services/placeholder/recurso.api.js
class Recurso {

  criarRecurso(title, bodyRequest, userId) {
    cy.getBaseUrl().then((baseUrl) => {
      cy.request({
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
      }).as('last_response');
    });
  }

  buscarRecurso(id) {
    cy.getBaseUrl().then((baseUrl) => {
      cy.request({
        method: "GET",
        failOnStatusCode: false,
        url: `${baseUrl}/posts/${id}`,
        headers: {
          "accept": "*/*",
          "Content-Type": "application/json"
        }
      }).as('last_response');
    });
  }

  atualizarRecurso(id, title, bodyRequest, userId) {
    cy.getBaseUrl().then((baseUrl) => {
      cy.request({
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
      }).as('last_response');
    });
  }

  deletarRecurso(id) {
    cy.getBaseUrl().then((baseUrl) => {
      cy.request({
        method: "DELETE",
        failOnStatusCode: false,
        url: `${baseUrl}/posts/${id}`,
        headers: {
          "accept": "*/*",
          "Content-Type": "application/json"
        }
      }).as('last_response');
    });
  }
}

export default Recurso;
