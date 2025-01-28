/* global Given, Then, When */
import Breeds from "../../support/services/breeds_api";
const breeds = new Breeds();

When('fizer uma consulta de todas as racas', () => {
    breeds.buscarTodasRacas()
})

When('fizer uma consulta de imagem da raca {string}', (imagemRaca) => {
    breeds.buscarImagemRaca(imagemRaca)
})

When('fizer uma consulta de racas randomica', () => {
    breeds.buscarImagemRacasAleatoria()
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

Then('sera retornado imagem da raca {string} com sucesso', (raca) => {
    cy.get('@last_response').should((response) => {
        expect(response.body.status).to.eq("success");
        expect(response.body.message).to.be.an('array').that.is.not.empty;
        response.body.message.forEach((url) => {
            expect(url).to.contain(raca)
        })
    })
})

Then('sera retornado mensagem {string}', (message) => {
    cy.get('@last_response').should((response) => {
        expect(response.body.message).to.eq(message);
    })
})

Then('sera retornado consulta randomica com sucesso', () => {
    cy.get('@last_response').should((response) => {
        expect(response.body.status).to.eq("success");
        expect(response.body.message).to.match(/^https:\/\/images\.dog\.ceo\/breeds\/.*\/.*\.jpg$/);
    })
})
