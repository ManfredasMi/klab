const frontendHelper = require("../helpers/frontendHelper");
const timeouts = require("../staticValues/constants.json");

const buy = {
  buttonDresses: element.all(by.css("[title='Dresses']")),
  buttonAddToCart: element(by.id("add_to_cart")),
  buttonBankWire: element(by.css("[class='bankwire']")),
  buttonContinueShopping: element(by.css('[title="Continue shopping"]')),
  buttonSubmit: element.all(by.css("[type='submit']")),
  buttonProcessAdress: element(by.css("[name='processAddress']")),
  buttonProceedCheckout: element.all(by.css("[title='Proceed to checkout']")),
  buttonProcessCarrier: element(by.css("[name='processCarrier']")),
  allPrintedDresses: element.all(by.css("[alt='Printed Dress']")),
  allSummerDresses: element.all(by.css("[alt='Printed Summer Dress']")),
  checkbox: element(by.id("cgv")),
  orderCompleteTextBox: element(by.css("[class='cheque-indent']")),

  clickAddToCart() {
    frontendHelper.clickElement(this.buttonAddToCart);
  },

  clickContinueShopping() {
    frontendHelper.clickElement(this.buttonContinueShopping);
  },

  addThreeDressesToCart() {
    frontendHelper.clickElement(this.buttonDresses.get(1));
    frontendHelper.clickElement(this.allPrintedDresses.get(0));
    this.clickAddToCart();
    frontendHelper.focusElement(this.buttonContinueShopping);
    frontendHelper.waitUntilElementAppears(
      this.buttonContinueShopping,
      timeouts.shortTimeout
    );
    this.clickContinueShopping();
    frontendHelper.clickElement(this.buttonDresses.get(1));
    frontendHelper.clickElement(this.allPrintedDresses.get(2));
    this.clickAddToCart();
    frontendHelper.focusElement(this.buttonContinueShopping);
    frontendHelper.waitUntilElementAppears(
      this.buttonContinueShopping,
      timeouts.shortTimeout
    );
    this.clickContinueShopping();
    frontendHelper.clickElement(this.buttonDresses.get(1));
    frontendHelper.clickElement(this.allPrintedDresses.get(3));
    this.clickAddToCart();
  },

  verifyOrderCompletion() {
    frontendHelper.focusElement(this.buttonProceedCheckout.get(0));
    frontendHelper.waitUntilElementAppears(
      this.buttonProceedCheckout,
      timeouts.shortTimeout
    );
    frontendHelper.clickElement(this.buttonProceedCheckout.get(0));
    frontendHelper.focusElement(this.buttonProceedCheckout.get(1));
    frontendHelper.clickElement(this.buttonProceedCheckout.get(1));
    frontendHelper.focusElement(this.buttonProcessAdress);
    frontendHelper.clickElement(this.buttonProcessAdress);
    frontendHelper.clickElement(this.checkbox);
    frontendHelper.clickElement(this.buttonProcessCarrier);
    frontendHelper.clickElement(this.buttonBankWire);
    frontendHelper.clickElement(this.buttonSubmit.get(1));
    frontendHelper.expectElementPresence(
      this.orderCompleteTextBox,
      "Your order is complete text is not displayed after completing the order"
    );
  }
};
module.exports = buy;
