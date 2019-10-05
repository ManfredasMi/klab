const frontendHelper = require("../helpers/frontendHelper");
const scenarioData = require("../staticValues/scenarioData.json").frontend
  .registrationData;
const timeouts = require("../staticValues/constants.json");

const registration = {
  buttonCreateAccount: element(by.id("SubmitCreate")),
  emailAddress: element(by.id("email_create")),
  submitAccount: element(by.id("submitAccount")),
  firstNameInputField: element(by.id("customer_firstname")),
  lastNameInputField: element(by.id("customer_lastname")),
  emailInputField: element(by.id("email")),
  passwordInputField: element(by.id("passwd")),
  addressInputField: element(by.id("address1")),
  cityInputField: element(by.id("city")),
  allStateDropdownOptions: element.all(by.css("#id_state option")),
  postcodeInputField: element(by.id("postcode")),
  mobPhoneInputField: element(by.id("phone_mobile")),
  validationErrorMessage: element(by.css("[class='alert alert-danger']")),
  createdAccInfo: element(by.css("[class='info-account']")),

  clickCreateAccount() {
    frontendHelper.clickElement(this.buttonCreateAccount);
  },

  clickRegisterButton() {
    frontendHelper.clickElement(this.submitAccount);
  },

  verifyErrorMessages() {
    frontendHelper.enterInput(
      this.emailAddress,
      frontendHelper.randomizeEmail(scenarioData.fail.email)
    );
    this.clickCreateAccount();
    frontendHelper.waitUntilElementPresent(
      this.firstNameInputField,
      timeouts.shortTimeout
    );
    frontendHelper.enterInput(
      this.firstNameInputField,
      scenarioData.fail.firstName
    );
    this.clickRegisterButton();
    frontendHelper.waitUntilElementPresent(
      this.validationErrorMessage,
      timeouts.shortTimeout
    );
    frontendHelper.expectElementPresence(
      this.validationErrorMessage,
      "There are x number of errors message is not displayed when creating account with invalid credentials"
    );
  },

  verifySuccessfulRegistration() {
    frontendHelper.enterInput(
      this.lastNameInputField,
      scenarioData.success.lastName
    );
    frontendHelper.enterInput(
      this.emailInputField,
      frontendHelper.randomizeEmail(scenarioData.success.email)
    );
    frontendHelper.enterInput(
      this.passwordInputField,
      scenarioData.success.password
    );
    frontendHelper.enterInput(
      this.addressInputField,
      scenarioData.success.address
    );
    frontendHelper.enterInput(this.cityInputField, scenarioData.success.city);
    frontendHelper.waitUntilElementAppears(
      this.allStateDropdownOptions,
      timeouts.tolerance
    );
    frontendHelper.selectDropdownByOptionNum(this.allStateDropdownOptions, 5);
    frontendHelper.enterInput(
      this.postcodeInputField,
      scenarioData.success.postalCode
    );
    frontendHelper.enterInput(
      this.mobPhoneInputField,
      scenarioData.success.mobileNr
    );
    frontendHelper.clickElement(this.submitAccount);
    frontendHelper.waitUntilElementAppears(
      this.createdAccInfo,
      timeouts.tolerance
    );
    frontendHelper.expectElementPresence(
      this.createdAccInfo,
      "Your created account info is not displayed after successfully completing registration"
    );
  }
};
module.exports = registration;
