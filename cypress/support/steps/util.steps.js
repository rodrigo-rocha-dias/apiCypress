/* global Given, Then, When */
import Util from "../../support/services/placeholder/recurso.api";
const util = new Util();

And('obter o codigo de resposta {string}', (response_code) => {
    cy.get('@last_response').should((response) => {
        expect(response.status).to.eq(parseInt(response_code))
    })
})

Then('sera retornado mensagem {string}', (message) => {
    cy.get('@last_response').should((response) => {
        expect(response.body.message).to.eq(message);
    })
})

Then('sera retornado mensagem no response {string}', (message) => {
    cy.get('@last_response').should((response) => {
        expect(response.body).to.contain(message);
    })
})