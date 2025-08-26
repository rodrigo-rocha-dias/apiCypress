/* global Given, Then, When */

Then('deve validar o status code 200 e schema {string} com sucesso', (schema) => {
    cy.get('@response').then(when => {
        cy.fixture('testData/response.json').then((responseData) => {
            expect(when.res.status).to.eq(responseData.responseSuccess[0].statusCode)
            cy.validateSchema(when.res.body, `${schema}/200.json`)
        })
    })
})

Then('deve validar o status code 201 e schema {string} com sucesso', (schema) => {
    cy.get('@response').then(({ res }) => {
        cy.fixture('testData/response.json').then((responseData) => {
            cy.validateSchema(when.res.body, `${schema}/200.json`)
            expect(res.status).to.eq(responseData.responseSuccess[1].statusCode)
        })
    })
})

Then('deve validar o status code 204 e schema {string} com sucesso', (schema) => {
    cy.get('@response').then(({ res }) => {
        cy.fixture('testData/response.json').then((responseData) => {
            cy.validateSchema(when.res.body, `${schema}/200.json`)
            expect(res.status).to.eq(responseData.responseSuccess[2].statusCode)
        })
    })
})

Then('deve validar o response e o status code 400', () => {
    cy.get('@response').then(({ res }) => {
        cy.fixture('testData/response.json').then((responseData) => {
            expect(res.status).to.eq(responseData.responseError[0].statusCode)
            // expect(res.status).to.eq(responseData.responseError[0].status)
            // expect(res.status).to.eq(responseData.responseError[0].error.message)
        })
    })
})

Then('deve validar o response e o status code 404', () => {
    cy.get('@response').then(({ res }) => {
        cy.fixture('testData/response.json').then((responseData) => {
            expect(res.status).to.eq(responseData.responseError[1].statusCode)
            // expect(res.status).to.eq(responseData.responseError[0].status)
            // expect(res.status).to.eq(responseData.responseError[0].error.message)
        })
    })
})

Then('deve validar o response e o status code 500', () => {
    cy.get('@response').then(({ res }) => {
        cy.fixture('testData/response.json').then((responseData) => {
            expect(res.status).to.eq(responseData.responseError[0].statusCode)
            // expect(res.status).to.eq(responseData.responseError[0].status)
            // expect(res.status).to.eq(responseData.responseError[0].error.message)
        })
    })
})
