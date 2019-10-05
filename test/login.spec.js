const login = require("../pages/login.po");
const frontendHelper = require("../helpers/frontendHelper");

describe("Login page ", () => {
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

  it("Expect that you land on authentication page", () => {
    login.verifyAuthenticationPage();
  });

  it("Expect authentication failed message after entering bad credentials", () => {
    login.verifyInvalidCredentialsErrorMessage();
  });

  it("Expect my account text to be displayed after successfully logging in", () => {
    login.verifyLogin();
  });
});
