import RequestManager from "../utils/requestManager";
import config from "../config/env.config.json";
import loginConfig from "../config/env.login.json";
import { validate } from "jsonschema";

Cypress.Commands.add("authenticationBookStore", (usuario) => {
  const ambiente = Cypress.env("ambiente") || "hml";
  const baseUrl = config.demoQa?.ambiente?.[ambiente]?.bookStore?.baseUrl;
  const users = loginConfig.demoQa?.ambiente?.[ambiente]?.bookStore;

  if (!users[usuario]) {
    throw new Error(`Usuário ${usuario} não encontrado no env.login.json`);
  }

  const lastUser = Cypress.env("lastUser");
  const token = Cypress.env("token");

  if (token && lastUser === usuario) {
    cy.log(`Reutilizando token para o usuário: ${usuario}`);
    return;
  }

  const requestManager = new RequestManager();

  return requestManager.performRequest({
    method: "POST",
    url: `${baseUrl}/Account/v1/GenerateToken`,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: {
      "userName": users[usuario].userName,
      "password": users[usuario].password,
    },
  }).then((response) => {
    const newToken = `Bearer ${response.body.token}`;
    Cypress.env("token", newToken);
    Cypress.env("lastUser", usuario);
    cy.log(`Novo token gerado para o usuário: ${usuario}`);
  })
})

Cypress.Commands.add('validateSchema', (res, schema) => {
  cy.fixture(`schemas/${schema}`).as('dataLoader').then((schema) => {
    const validation = validate(res, schema, { required: true, nestedErrors: true, });
    let errors = '';
    if (!validation.valid) {
      errors += validation.errors.map((err) => {
        return `\nType error: ${err.name}. Detail: ${err.stack.replace('instance', 'response.body')}. Actual value: ${JSON.stringify(err.instance)}`;
      })
    }
    expect(validation.valid).to.be.equal(true, `SCHEMA VALIDATION ${errors}`)
  })
})