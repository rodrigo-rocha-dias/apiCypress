/* global Given, Then, When */
import Account from "../../../services/demoQa/bookStore/account.api";
const account = new Account();

Given('faca requisicao para validar se esta autorizado', () => {
    account.usuarioAutorizado()
})

Given('que faca login na api de book store com usuario {string}', (usuario) => {
    cy.authenticationBookStore(usuario)
})

Given('que faca requisicao de criar usuario na book store', () => {
    let userName = `usuario${Math.floor(Math.random() * 1000)}@teste.com`;
    let password = 'Senha!123';
    cy.wrap({ userName, password }).as("userData")
    account.criarUsuario(userName, password).then((response) => {
        expect(response.status).to.eq(201);
        cy.wrap(response.body).as("userResponse")
    })
})

Given('faca buscar por usuario pelo userid {string}', (userId) => {
    account.buscarUsuarioPorUserId(userId)
})

Then('sera retornado resposta no corpo {string}', (boolean) => {
    cy.get('@last_response').should((response) => {
        expect(response.body).to.eq(boolean)
        expect(response.headers).to.have.property('content-type').that.includes('application/json');
    })
})

Then('sera criado um usuario e logo apos validacao sera excluido', () => {
    cy.get('@userData').then(({ userName, password }) => {
        account.gerarToken(userName, password).then((response) => {
            expect(response.status).to.eq(200);
            cy.wrap(response.body.token).as("authToken");
            Cypress.env("token", `Bearer ${response.body.token}`);
            return cy.authenticationBookStore(userName);
        }).then(() => {
            cy.get('@userResponse').then((response) => {
                const userId = response.userID;
                cy.request({
                    method: "DELETE",
                    url: `${Cypress.env("baseUrl")}/Account/v1/User/${userId}`,
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": Cypress.env("token")
                    }
                }).then((deleteResponse) => {
                    expect(deleteResponse.status).to.eq(204);
                })
            })
        })
    })
})

Then('sera retornado resposta no corpo resultado {string} e status {string}', (result, status) => {
    cy.get('@last_response').should((response) => {
        expect(response.body.expires).to.eq(null)
        expect(response.body.result).to.eq(result)
        expect(response.body.status).to.eq(status)
        expect(response.body.token).to.eq(null)
        expect(response.headers).to.have.property('content-type').that.includes('application/json');
    })
})
