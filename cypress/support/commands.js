Cypress.Commands.add("getBaseUrl", () => {
    const parceiro = Cypress.env("parceiro")?.trim() || "placeholder";
    const ambiente = Cypress.env("ambiente")?.trim() || "hml";
  
    return cy.readFile("cypress/config/env.config.json").then((config) => {
      if (config.parceiro?.[parceiro]?.ambiente?.[ambiente]?.recursos?.baseUrl) {
        const baseUrl = config.parceiro[parceiro].ambiente[ambiente].recursos.baseUrl;
        return baseUrl;
      } else {
        throw new Error(`Configuração não encontrada para parceiro: '${parceiro}' e ambiente: '${ambiente}'`);
      }
    });
  });
  