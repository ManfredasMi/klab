const EC = protractor.ExpectedConditions;
const timeouts = require("../staticValues/constants.json");
const validation = require("../helpers/validation");

module.exports = {
  ...validation,
  navigate(url, timeout = timeouts.requestTimeouts) {
    browser.get(url, timeout).catch(() => {
      browser.sleep(timeouts.tolerance);
      browser
        .switchTo()
        .alert()
        .accept()
        .catch(() => {});
      browser.switchTo().defaultContent();
    });
    browser.sleep(timeouts.navigation);
  },

  teardown(browser) {
    return Promise.all([
      browser.manage().deleteAllCookies(),
      browser.executeScript("window.sessionStorage.clear();"),
      browser.executeScript("window.localStorage.clear();")
    ]);
  },

  expectElementPresence(element, errorMessage, presence = true) {
    element.isPresent().then(status => {
      this.expectCondition(status, presence, errorMessage);
    });
  },

  enterInput(inputElement, value) {
    inputElement
      .click()
      .clear()
      .sendKeys(value);
  },

  clickElement(pageElement) {
    this.waitUntilElementPresent(pageElement, timeouts.tolerance);
    pageElement.click();
    browser.sleep(timeouts.clickAction);
  },

  waitUntilElementPresent(pageElement, customTimeout) {
    let timeout = timeouts.shortTimeout;
    if (customTimeout) timeout = customTimeout;
    browser.wait(EC.presenceOf(pageElement), timeout).catch(() => {});
  },

  waitUntilElementAppears(pageElement, customTimeout) {
    let timeout = timeouts.shortTimeout;
    if (customTimeout) timeout = customTimeout;
    browser.wait(EC.visibilityOf(pageElement), timeout).catch(() => {});
  },

  focusElement(pageElement) {
    this.waitUntilElementPresent(pageElement, timeouts.tolerance);
    browser
      .executeScript("arguments[0].scrollIntoView(true)", pageElement)
      .catch(() => {});
  },

  randomizeEmail(email, isInboxNeeded = false) {
    let plus = "";
    if (isInboxNeeded) {
      plus = "+";
    }
    return email.replace("@", `${plus}${Date.now().toString()}@`);
  },

  selectDropdownByOptionNum(pageElement, optionNum) {
    const opt = pageElement.get(optionNum);
    if (opt.then) {
      opt.then(
        o => {
          o.click();
        },
        err => {
          throw `Cannot select option ${optionNum} as error occured: ${err}`;
        }
      );
    } else {
      opt.click();
    }
  }
};
