const login = require("../pages/login.po");
const dresses = require("../pages/dresses.po");
const frontendHelper = require("../helpers/frontendHelper");

describe("Dresses page ", () => {
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

  it("Expect dresses text to be displayed after navigating to dresses page", () => {
    dresses.verifyDressesPage();
  });

  it("Expect summer dress table content text to be printed in the console", () => {
    dresses.verifyFirstDressPrice();
  });

  it("Expect summer dress table content text to be printed in the console", () => {
    dresses.vertifySecondDressPrice();
  });

  it("Expect summer dress table content text to be printed in the console", () => {
    dresses.verifyThirdDressPrice();
  });
});
