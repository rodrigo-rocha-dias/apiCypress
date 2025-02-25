/* global Given, Then, When */
import Recurso from "../../services/placeholder/recurso.api";
const recurso = new Recurso();
import { faker } from '@faker-js/faker';

const testCases = {
    sucesso: { id: 1, statusEsperado: { get: 200, put: 200 } },
    invalido: { id: 2222, statusEsperado: { get: 404, put: 500 } },
    null: { id: null, statusEsperado: { get: 404, put: 500 } },
    longo: { id: "11111111111111111111111111111111111111111111111111111111111111", statusEsperado: { get: 404, put: 500 } },
    inexistente: { id: "0000", statusEsperado: { get: 404, put: 500 } }
}

Given('que faca a criacao de um novo recurso titulo {string} corpo {string} e usuarioId {string}', (title, bodyRequest, userId) => {
    const dadosCriacao = {
        title: title || faker.lorem.words(3),
        bodyRequest: bodyRequest || faker.lorem.sentence(),
        userId: userId || faker.number.int({ min: 1, max: 100 })
    }
    cy.wrap(dadosCriacao).as('requestData')
    recurso.criarRecurso(dadosCriacao.title, dadosCriacao.bodyRequest, dadosCriacao.userId)
        .then((response) => {
            expect(response.status).to.eq(201)
            cy.wrap(response).as('responseData')
        })
})

Given('fizer consulta de recurso por {string}', (tipo) => {
    const { id, statusEsperado } = testCases[tipo] || testCases.sucesso;
    cy.wrap(id).as('requestId')
    cy.wrap(statusEsperado.get).as('expectedStatus')
    recurso.buscarRecurso(id).then((response) => {
        cy.wrap(response).as('responseData')
    })
})

Given('que faca a atualizacao do recurso por {string}', (tipo) => {
    const { id, statusEsperado } = testCases[tipo] || testCases.sucesso
    const title = faker.lorem.words(3)
    const bodyRequest = faker.lorem.sentence()
    const userId = faker.number.int({ min: 1, max: 100 })
    cy.wrap({ id, title, bodyRequest, userId }).as('requestData')
    cy.wrap(statusEsperado.put).as('expectedStatus')
    recurso.atualizarRecurso(id, title, bodyRequest, userId).then((response) => {
        cy.wrap(response).as('responseData')
    })
})

Given('que faca a exclusao do recurso por {string}', (tipo) => {
    const { id, statusEsperado } = testCases[tipo] || testCases.sucesso;
    cy.wrap(id).as('requestId')
    cy.wrap(statusEsperado.get).as('expectedStatus')
    recurso.deletarRecurso(id).then((response) => {
        cy.wrap(response).as('responseData')
    })
})

Then('sera retornado recurso com titulo {string} corpo {string} e usuarioId {string} com sucesso', (title, bodyRequest, userId) => {
    cy.get('@requestData').then((requestData) => {
        cy.get('@responseData').should((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.title).to.eq(title || requestData.title)
            expect(response.body.body).to.eq(bodyRequest || requestData.bodyRequest)
            expect(response.body.userId.toString()).to.eq(userId || requestData.userId.toString())
            expect(response.headers).to.have.property('content-type').that.includes('application/json')
        })
    })
})

Then('sera retornado consulta do recurso com sucesso', () => {
    cy.get('@requestId').then((id) => {
        cy.get('@expectedStatus').then((statusEsperado) => {
            cy.get('@responseData').should((response) => {
                expect(response.status).to.eq(statusEsperado)

                if (statusEsperado === 200) {
                    expect(response.body.id).to.eq(Number(id))
                    expect(response.headers).to.have.property('content-type').that.includes('application/json')
                } else {
                    expect(response.body).to.be.empty
                }
            })
        })
    })
})

Then('sera retornado no response os dados atualizados corretamente ou uma mensagem de erro', () => {
    cy.get('@expectedStatus').then((statusEsperado) => {
        cy.get('@responseData').then((response) => {
            expect(response.status).to.eq(statusEsperado)
            if (statusEsperado === 200) {
                cy.get('@requestData').then(({ id, title, bodyRequest, userId }) => {
                    expect(response.body.id).to.eq(id)
                    expect(response.body.title).to.eq(title)
                    expect(response.body.body).to.eq(bodyRequest)
                    expect(response.body.userId).to.eq(userId)
                    expect(response.headers).to.have.property('content-type').that.includes('application/json')
                })
            } else {
                expect(response.body).to.contain("TypeError: Cannot read properties of undefined")
            }
        })
    })
})
