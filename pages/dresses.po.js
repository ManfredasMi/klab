const frontendHelper = require("../helpers/frontendHelper");
const timeouts = require("../staticValues/constants.json");
const validation = require("../helpers/validation");
const scenarioData = require("../staticValues/scenarioData.json").frontend
  .dresses;

const dresses = {
  buttonDresses: element.all(by.css("[title='Dresses']")),
  dressesText: element(by.css("[class='category-name']")),
  allDressesOptions: element.all(by.css("[class='img']")),
  allSummerDressPrices: element.all(
    by.css(
      "[class='product_list grid row'] div .right-block [itemprop='offers'] [itemprop='price']"
    )
  ),
  checkPolyesterCheckbox: element(by.id("uniform-layered_id_feature_1")),

  clickOnSummerDresses() {
    frontendHelper.clickElement(this.allDressesOptions.get(2));
  },

  verifyPolyesterFilteredChanges() {
    frontendHelper.clickElement(this.checkPolyesterCheckbox);
    console.log(
      "After making the previous step test filters are broken and dies"
    );
  },

  verifyFirstDressPrice() {
    this.allSummerDressPrices
      .get(0)
      .getText()
      .then(price => {
        validation.expectCondition(
          price,
          scenarioData.firstDressInfo.price,
          `first summer dress price on the page is incorrect. Was expecting ${scenarioData.firstDressInfo.price} but got ${price} instead`
        );
      });
  },

  vertifySecondDressPrice() {
    this.allSummerDressPrices
      .get(1)
      .getText()
      .then(price => {
        validation.expectCondition(
          price,
          scenarioData.secondDressInfo.price,
          `first summer dress price on the page is incorrect. Was expecting ${scenarioData.secondDressInfo.price} but got ${price} instead`
        );
      });
  },

  verifyThirdDressPrice() {
    this.allSummerDressPrices
      .get(2)
      .getText()
      .then(price => {
        validation.expectCondition(
          price,
          scenarioData.thirdDressInfo.price,
          `first summer dress price on the page is incorrect. Was expecting ${scenarioData.thirdDressInfo.price} but got ${price} instead`
        );
      });
  },

  verifyDressesPage() {
    frontendHelper.clickElement(this.buttonDresses.get(1));
    frontendHelper.waitUntilElementPresent(
      this.dressesText,
      timeouts.shortTimeout
    );
    frontendHelper.expectElementPresence(
      this.dressesText,
      "Dresses text is not displayed after navigating to dresses page"
    );
  }
};
module.exports = dresses;
