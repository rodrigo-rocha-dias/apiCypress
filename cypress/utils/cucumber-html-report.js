const fs = require('fs');
const path = require('path');

const reportsDir = path.join(__dirname, '../reports/cucumber-json');

// Corrigir nomes com ".json.json"
fs.readdirSync(reportsDir).forEach(file => {
  if (file.endsWith('.json.json')) {
    const oldPath = path.join(reportsDir, file);
    const newPath = path.join(reportsDir, file.replace('.json.json', '.json'));
    fs.renameSync(oldPath, newPath);
  }
});

// Agora pode continuar com a geração do relatório normalmente
const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonDir: reportsDir,
  output: path.join(__dirname, '../reports/cucumber-html-report.html'),
  reportSuiteAsScenarios: true,
  launchReport: true,
};

reporter.generate(options);
