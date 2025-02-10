# 📌 Projeto API Cypress com Cucumber e JavaScript

## 📖 Visão Geral

Este projeto utiliza **Cypress** com **Cucumber** para automação de testes em API, seguindo o padrão **Page Object Model (POM)**. Ele permite testes estruturados e reutilizáveis, garantindo manutenção simplificada e organização eficiente.

## 📂 Estrutura do Projeto

```
APICYPRESS/
│-- .github/workflows/       # Configurações do GitHub Actions
│-- cypress/
│   ├── config/              # Configuração de ambientes
│   │   ├── env.config.json  # Arquivo de configuração de ambiente
│   ├── e2e/features/        # Features dos testes em Cucumber
│   │   ├── dog/             # Features relacionadas ao módulo "dog"
│   │   ├── placeholder/     # Features relacionadas ao módulo "placeholder"
│   │   │   ├── recursos.feature  # Exemplo de feature
│   ├── fixtures/            # Arquivos de mock para testes
│   ├── plugins/             # Plugins do Cypress
│   ├── reports/             # Relatórios de execução dos testes
│   ├── results/             # Resultados das execuções
│   ├── screenshots/         # Capturas de tela das execuções
│   ├── support/
│   │   ├── services/        # Camada de serviços para chamadas API
│   │   ├── steps/           # Passos do Cucumber
│   │   │   ├── placeholder/recursos.step.js  # Exemplo de step
│   │   ├── util.steps.js    # Steps reutilizáveis para diversas features
│   │   ├── commands.js      # Comandos personalizados do Cypress
│   │   ├── e2e.js           # Configurações globais para execução dos testes
│   │   ├── stepsPortugues.js  # Tradução dos steps para PT-BR
│-- .gitignore               # Arquivos ignorados pelo Git
│-- cypress.config.js        # Configurações do Cypress
│-- cypress-report-config.json # Configuração do relatório
│-- package.json             # Dependências e scripts do projeto
│-- README.md                # Documentação do projeto
│-- reporter-config.json     # Configuração dos relatórios de execução
```

## 🚀 Instalação e Configuração

### 1️⃣ Clonar o repositório
```sh
git clone <URL_DO_REPOSITORIO>
cd APICYPRESS
```

### 2️⃣ Instalar dependências
```sh
npm install
```

### 3️⃣ Instalar o Cypress e o Cucumber
```sh
npm install cypress cypress-cucumber-preprocessor --save-dev
```

## 🎯 Execução dos Testes

### 🔹 Rodar os testes via interface gráfica
```sh
npm run cypress:open
```

### 🔹 Rodar todos os testes via linha de comando
```sh
npm run test
```

### 🔹 Rodar testes filtrando por tags
```sh
npm run cypress:run:tags
```

## 🏗️ Estrutura do Código (POM e Utils)

O projeto segue o **Page Object Model (POM)**, separando responsabilidades e garantindo reuso de código:

### 📌 Exemplo de um Step (Arquivo de Step)
```javascript
/* global Given, Then, When */
import Recurso from "../../services/placeholder/recurso.api";
const recurso = new Recurso();

Given('fizer consulta de recurso por id {string}', (id) => {
    recurso.buscarRecurso(id);
})
```

### 📌 Exemplo de um Arquivo de Service (Chamada de API)
```javascript
class Recurso {
  criarRecurso(title, bodyRequest, userId) {
    cy.getBaseUrl().then((baseUrl) => {
      cy.request({
        method: "POST",
        failOnStatusCode: false,
        url: `${baseUrl}/posts`,
        headers: {
          "accept": "*/*",
          "Content-Type": "application/json"
        },
        body: {
          title: title,
          body: bodyRequest,
          userId: userId
        }
      }).as('last_response');
    });
  }
}
```

### 📌 Exemplo de um Teste em Cucumber (Arquivo Feature)
```gherkin
Feature: Placeholder - Recursos

    @regressivo @placeholder @recursos
    Scenario: Buscar recurso por ID
        Given fizer consulta de recurso por id "1"
        When obter o codigo de resposta "200"
        Then sera retornado consulta do recurso "1" com sucesso
```

## 📊 Geração de Relatórios
Os relatórios são gerados automaticamente após a execução dos testes e ficam armazenados na pasta `cypress/reports/`.

## 🛠️ Configuração do GitHub Actions
Para integrar o projeto com **GitHub Actions**, crie um arquivo `.github/workflows/test-cypress.yml` com o seguinte conteúdo:

```yaml
name: Run Cypress Tests

on:
  push:
    branches:
      - main
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout do código
        uses: actions/checkout@v4

      - name: Configurar Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Instalar dependências
        run: npm install

      - name: Rodar testes do Cypress
        run: npm run test

      - name: Salvar artefatos em caso de falha
        if: failure()
        uses: actions/upload-artifact@v4
        with:
          name: cypress-screenshots
          path: cypress/screenshots/
```

## 📌 Conclusão

Agora você tem um projeto Cypress estruturado e pronto para rodar testes automatizados! 🚀
Se precisar de ajustes ou melhorias, fique à vontade para contribuir! 😊

