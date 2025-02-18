class RequestManager {
  performRequest({ method, url, query, body, headers = {}, timeout }) {
    const token = Cypress.env('token') || Cypress.env('bearer');
    const options = {
      method: method,
      failOnStatusCode: false,
      url,
      qs: query,
      // query,
      body,
      headers: { ...headers, ...(token ? { Authorization: token } : {}) },
      timeout,
    };
    return cy.request(options).as('last_response');
  }
}

export default RequestManager;
