const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonDir: 'cypress/reports/cucumber-json',  // Diretório onde os arquivos JSON do Cucumber são salvos
  output: 'cypress/reports/cucumber-report.html',  // Arquivo HTML de saída
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true
};

reporter.generate(options);
