class Recurso {

  criarRecurso(title, bodyRequest, userId) {
    cy.request({
      method: "POST",
      failOnStatusCode: false,
      url: `https://jsonplaceholder.typicode.com/posts`,
      headers: {
        "accept": "*/*",
        "Content-Type": "application/json"
      },
      body: {
        title: title,
        body: bodyRequest,
        userId: userId
      }
    }).as('last_response')
  }

  buscarRecurso(id) {
    cy.request({
      method: "GET",
      failOnStatusCode: false,
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      headers: {
        "accept": "*/*",
        "Content-Type": "application/json"
      }
    }).as('last_response')
  }



}

export default Recurso;
