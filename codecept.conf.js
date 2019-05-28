require('import-export');
const { getStepsByAppNames } = require('./app/common/utils');
const { appilcationNames } = require('./app/common/constants');

const environment = process.env.NODE_ENV || 'local';
const appNames = (process.env.APP_NAMES || appilcationNames.APP1).split(',');

exports.config = {
  output: './app/output',
  helpers: {
    Puppeteer: {
      url: 'https://github.com',
      show: environment !== 'integration',
      windowSize: '1440x700',
    },
  },
  include: {
    I: './steps_file.js',
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './app/**/features/*.feature',
    steps: [
      ...getStepsByAppNames(appNames),
      './app/common/genericSteps.js',
    ],
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
  },
  tests: './app/**/tests/*.js',
  name: 'automation-starter',
};
