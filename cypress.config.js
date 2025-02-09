const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;
const cypressGrep = require('cypress-grep/src/plugin');

module.exports = defineConfig({
  viewportWidth: 550,
  viewportHeight: 750,
  defaultCommandTimeout: 15000,
  requestTimeout: 5000,
  responseTimeout: 30000,
  video: false,
  screenshotOnRunFailure: true,
  screenshotsFolder: 'screenshots',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      cypressGrep(on, config);
      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
  },
  cucumberJson: {
    generate: true,
    outputFolder: 'cypress/reports/cucumber-json',
    filePrefix: '',
    fileSuffix: '.json'
  },
  env: {
    grep: '',
    grepFilterSpecs: true
  }  
});
