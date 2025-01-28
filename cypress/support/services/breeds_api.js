class Breeds {

  buscarTodasRacas() {
    cy.request({
      method: "GET",
      failOnStatusCode: false,
      url: `https://dog.ceo/api/breeds/list/all`,
      headers: {
        "accept": "*/*",
        "Content-Type": "application/json"
      }
    }).as('last_response')
  }

  buscarImagemRaca(breed) {
    cy.request({
      method: "GET",
      failOnStatusCode: false,
      url: `https://dog.ceo/api/breed/${breed}/images`,
      headers: {
        "accept": "*/*",
        "Content-Type": "application/json"
      }
    }).as('last_response')
  }

  buscarImagemRacasAleatoria() {
    cy.request({
      method: "GET",
      failOnStatusCode: false,
      url: `https://dog.ceo/api/breeds/image/random`,
      headers: {
        "accept": "*/*",
        "Content-Type": "application/json"
      }
    }).as('last_response')
  }

}

export default Breeds;
