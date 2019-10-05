const login = require("../pages/login.po");
const buy = require("../pages/buy.po");
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

  it("Expect my account text to be displayed after successfully logging in", () => {
    login.verifyLogin();
  });

  it("Expect your order is complete message after succesfully buying 3 dresses", () => {
    buy.addThreeDressesToCart();
    buy.verifyOrderCompletion();
  });
});
