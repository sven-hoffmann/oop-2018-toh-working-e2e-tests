// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  // capabilities: {
  //   'browserName': 'chrome',
  //   // For Travis CI only
  //   chromeOptions: {
  //     binary: process.env.CHROME_BIN,
  //     args: ['--no-sandbox']
  //   }
  // },
  // directConnect: true,
  multiCapabilities: [
    {'browserName': 'chrome'},
    {'browserName': 'firefox', marionette: true}
  ],
  directConnect: false,
  jvmArgs : [
    '-Dwebdriver.chrome.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.35.exe',
    '-Dwebdriver.gecko.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.19.1.exe',
  ],
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
