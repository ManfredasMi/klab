const login = require("../pages/login.po");
const registration = require("../pages/registration.po");
const frontendHelper = require("../helpers/frontendHelper");

describe("Buy page ", () => {
  beforeAll(() => {
    browser.waitForAngularEnabled(false);
  });

  afterAll(done => {
    frontendHelper
      .teardown(browser)
      .then(done)
      .catch(done);
  });

  it("Expect Sign in button to be displayed after navigating to base url", () => {
    login.openBaseUrl();
    login.verifyHomePage();
  });

  it("Expect that after clicking sign in you land on authentication page", () => {
    login.verifyAuthenticationPage();
  });

  it("Expect validation error messages to be present", () => {
    registration.verifyErrorMessages();
  });

  it("Expect registration has been successfull", () => {
    registration.verifySuccessfulRegistration();
  });
});
