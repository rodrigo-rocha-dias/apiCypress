const { defineConfig } = require('cypress')

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
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/reports/xml/[hash].xml',
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/integration/**/*.feature',
    slowTestThreshold: 10000,
    supportFile: 'cypress/support/e2e.js',
  }
})