/* global Given, Then, When */
import Recurso from "../services/recurso.api";
const recurso = new Recurso();
let contador = 0;

Given('que faca a criacao de um novo recurso titulo {string} corpo {string} e usuarioId {string}', (title, bodyRequest, userId) => {
    recurso.criarRecurso(title, bodyRequest, userId)
})

Given('fizer consulta de recurso por id {string}', (id) => {
    recurso.buscarRecurso(id)
})

Then('sera retornado recurso com titulo {string} corpo {string} e usuarioId {string} com sucesso', (title, bodyRequest, userId) => {
    cy.get('@last_response').should((response) => {
        expect(response.body.body).to.eq(bodyRequest)
        expect(response.body.title).to.eq(title)
        expect(response.body.userId).to.eq(userId)
        expect(response.headers).to.have.property('content-type').that.includes('application/json');
    })
})

Then('sera retornado consulta do recurso {string} com sucesso', (id) => {
    cy.get('@last_response').should((response) => {
        expect(response.body.id).to.eq(Number(id))
        expect(response.headers).to.have.property('content-type').that.includes('application/json');
    })
})

