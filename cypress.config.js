const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

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
      return config;
    },
    specPattern: 'cypress/integration/**/*.feature',
  },
});
