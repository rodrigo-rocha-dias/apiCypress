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
}

export default Breeds;
