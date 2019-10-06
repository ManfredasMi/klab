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

  it("Expect first summer dress table price to be as per scenarioData", () => {
    dresses.verifyFirstDressPrice();
  });

  it("Expect second summer dress table price to be as per scenarioData", () => {
    dresses.vertifySecondDressPrice();
  });

  it("Expect third summer dress table price to be as per scenarioData", () => {
    dresses.verifyThirdDressPrice();
  });

  xit("Expect polyester filter option works good", () => {
    dresses.verifyPolyesterFilteredChanges();
  });
});
