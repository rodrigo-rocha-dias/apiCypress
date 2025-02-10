/* global Given, Then, When */
import Recurso from "../../services/placeholder/recurso.api";
const recurso = new Recurso();

Given('que faca a criacao de um novo recurso titulo {string} corpo {string} e usuarioId {string}', (title, bodyRequest, userId) => {
    recurso.criarRecurso(title, bodyRequest, userId)
})

Given('fizer consulta de recurso por id {string}', (id) => {
    recurso.buscarRecurso(id)
})

Given('que faca a atualizacao do recurso por id {string}', (id) => {
    let title = 'Titulo atualizado'
    let bodyRequest = 'Corpo atualizado'
    let userId = 2
    recurso.atualizarRecurso(id, title, bodyRequest, userId)
})

Given('que faca a exclusao do recurso por id {string}', (id) => {
    recurso.deletarRecurso(id)
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

Then('sera consultado pelo id {string} e sera atualizado o recurso {string} com sucesso', (idConsulta, idAtualizacap) => {
    recurso.buscarRecurso(idConsulta)
    cy.get('@last_response').should((response) => {
        expect(response.body.id).to.eq(Number(idAtualizacap))
        // Essa API de teste nao esta atualizando nesse endpoint, mas a validação que eu faria é essa, depois que foi feito o PictureInPictureEvent, deveria trocar no response 
        // expect(response.body.title).to.eq('Título atualizado')
        // expect(response.body.body).to.eq('Corpo atualizado')
        // expect(response.body.userId).to.eq(2)
        expect(response.headers).to.have.property('content-type').that.includes('application/json')
    })
})