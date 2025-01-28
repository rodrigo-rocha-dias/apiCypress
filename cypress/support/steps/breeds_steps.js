/* global Given, Then, When */
import Breeds from "../../support/services/breeds_api";
const breeds = new Breeds();

When('fizer uma consulta de todas as racas', () => {
    breeds.buscarTodasRacas()
})

And('obter o codigo de resposta {string}', (response_code) => {
    cy.get('@last_response').should((response) => {
        expect(response.status).to.eq(parseInt(response_code))
    })
})

Then('sera retornado consulta com sucesso', () => {
    cy.get('@last_response').should((response) => {
        expect(response.body.message).to.have.property('affenpinscher');
        expect(response.body.message).to.have.property('akita');
        expect(response.body.message).to.have.property('bulldog').that.includes('boston', 'english', 'french');
        expect(response.body.status).to.eq("success")
    })
})