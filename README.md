# Projeto de Testes de API com Cypress

Este repositório contém um projeto de testes de API utilizando Cypress e Mochawesome Reporter para gerar relatórios detalhados.

## Configuração do Ambiente

### Passo 1: Inicialização do Projeto

1. Criação do Diretório do Projeto:
    ```bash
    mkdir projeto-api-cypress
    cd projeto-api-cypress
    ```

2. Inicialização do NPM:
    ```bash
    npm init -y
    ```

### Passo 2: Instalação do Cypress

1. Instalação do Cypress como Dependência de Desenvolvimento:
    ```bash
    npm install cypress --save-dev
    ```

2. Abertura do Cypress pela Primeira Vez:
    ```bash
    npx cypress open
    ```
    Isso criará automaticamente a estrutura de pastas padrão `cypress/` e um arquivo de configuração `cypress.json`.

### Passo 3: Estrutura do Projeto

1. Criação da Estrutura de Pastas e Arquivos de Teste:
    Dentro da pasta `cypress/integration/`, crie um arquivo de teste de API:
    ```bash
    touch cypress/integration/api_test.spec.js
    ```

2. Escrita do Primeiro Teste de API:
    Abra o arquivo `breeds_api.js` e escreva o primeiro teste de API:
    ```javascript
  buscarTodasRacas() {
    cy.request({
      method: "GET",
      failOnStatusCode: false,
      url: `https://dog.ceo/api/breeds/list/all`,
      headers: {
        "accept": "*/*",
        "Content-Type": "application/json"
      }
    }).as('last_response')
  }
    ```

### Passo 4: Executar os Testes

1. Execução dos Testes em Modo Interativo ou Headless:
    - Modo interativo:
        ```bash
        npx cypress open
        ```
    - Modo headless:
        ```bash
        npx cypress run
        ```

### Passo 5: Integração com o GitHub

1. Inicialização do Repositório Git Local e Commit Inicial:
    - Inicialize o repositório Git:
        ```bash
        cd /caminho/do/seu/projeto
        git init
        git add .
        git commit -m "Primeiro commit - adicionando todos os arquivos do projeto"
        ```

2. Vinculação ao Repositório Remoto no GitHub:
    - Adicione o repositório remoto:
        ```bash
        git remote add origin https://github.com/rodrigo-rocha-dias/apiAgi.git
        ```

3. Envio dos Arquivos para o Repositório Remoto:
    - Faça o push dos arquivos:
        ```bash
        git push -u origin master
        ```

## Relatório de Resultados

Para gerar relatórios detalhados após a execução dos testes, usamos a biblioteca `cypress-mochawesome-reporter`.

### Passos para Configuração do Relatório

1. Instalar `cypress-mochawesome-reporter`:
    ```bash
    npm install --save-dev cypress-mochawesome-reporter
    ```

2. Configurar o Cypress para Usar o `cypress-mochawesome-reporter`:
    No arquivo `cypress.config.js`, adicione a configuração do reporter:
    ```javascript
    const { defineConfig } = require('cypress');

    module.exports = defineConfig({
      viewportWidth: 550,
      viewportHeight: 750,
      defaultCommandTimeout: 15000,
      requestTimeout: 5000,
      responseTimeout: 30000,
      video: false,
      videoCompression: 15,
      videoUploadOnPasses: false,
      screenshotOnRunFailure: true,
      screenshotsFolder: 'cypress/screenshots',
      videosFolder: 'cypress/videos',
      downloadsFolder: 'cypress/downloads',
      trashAssetsBeforeRuns: true,
      reporter: 'cypress-mochawesome-reporter',
      reporterOptions: {
        reportDir: 'cypress/reports',
        overwrite: false,
        html: true,
        json: true,
        timestamp: 'mmddyyyy_HHMMss',
        mochaFile: 'cypress/reports/xml/[hash].xml',
      },
      retries: {
        runMode: 0,
        openMode: 0,
      },
      e2e: {
        setupNodeEvents(on, config) {
          require('cypress-mochawesome-reporter/plugin')(on);
          require('./cypress/plugins/index.js')(on, config);
        },
        specPattern: 'cypress/integration/**/*.feature',
        slowTestThreshold: 10000,
        supportFile: 'cypress/support/e2e.js',
      }
    });
    ```

3. Adicionar o `cypress-mochawesome-reporter` ao Suporte:
    No arquivo `cypress/support/e2e.js`, adicione o seguinte para habilitar o reporter:
    ```javascript
    import 'cypress-mochawesome-reporter/register';
    ```

4. Executar os Testes e Gerar o Relatório:
    Para rodar os testes e gerar os relatórios, use o comando:
    ```bash
    npx cypress run --reporter cypress-mochawesome-reporter
    ```

### Visualização dos Resultados
Após a execução dos testes, os relatórios serão gerados na pasta `cypress/reports`. Você pode abrir o arquivo HTML no seu navegador para visualizar os resultados.

---

Seguindo estes passos, você terá configurado o ambiente de testes e estará gerando relatórios detalhados dos resultados dos seus testes de API usando Cypress. Se precisar de mais alguma coisa ou tiver outra dúvida, sinta-se à vontade para perguntar. 🚀
