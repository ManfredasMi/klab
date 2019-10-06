/* eslint-disable no-console */
const DEFAULT_BASE_URL = "http://automationpractice.com";
const timeouts = require("./staticValues/constants.json");

exports.config = {
  framework: "jasmine2",
  seleniumAddress: "http://localhost:4444/wd/hub",
  directConnect: false,

  suites: {
    loginPage: "./test/login.spec.js",
    buyPage: "./test/buy.spec.js",
    registrationPage: "./test/registration.spec.js",
    dressesPage: "./test/dresses.spec.js"
  },

  params: {
    baseUrl: DEFAULT_BASE_URL
  },

  getPageTimeout: timeouts.getPageTimeout,
  jasmineNodeOpts: {
    defaultTimeoutInterval: timeouts.jasmineTimeout,
    isVerbose: false
  }
};
