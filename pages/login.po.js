const frontendHelper = require("../helpers/frontendHelper");
const timeouts = require("../staticValues/constants.json");

const login = {
  buttonSignIn: element(by.css(".login")),
  buttonCreateAccount: element(by.id("SubmitCreate")),
  buttonSubmitLogin: element(by.id("SubmitLogin")),
  createEmailFieldBox: element(by.id("email_create")),
  emailInputField: element(by.id("email")),
  passwordInputField: element(by.id("passwd")),
  authenticationFailed: element(by.css('[class="alert alert-danger"]')),
  myAccountText: element(by.id("my-account")),

  openBaseUrl() {
    frontendHelper.navigate(`${browser.params.baseUrl}`);
  },

  clickSignInButton() {
    frontendHelper.clickElement(this.buttonSubmitLogin);
  },

  verifyHomePage() {
    frontendHelper.expectElementPresence(
      this.buttonSignIn,
      "Sign in button is missing on home page"
    );
  },

  verifyAuthenticationPage() {
    frontendHelper.clickElement(this.buttonSignIn);
    frontendHelper.waitUntilElementAppears(this.buttonCreateAccount, 4000);
    frontendHelper.expectElementPresence(this.buttonCreateAccount);
  },

  verifyInvalidCredentialsErrorMessage() {
    frontendHelper.enterInput(
      this.emailInputField,
      "invalidEmail@google.facebook"
    );
    frontendHelper.enterInput(this.passwordInputField, "very nice password");
    this.clickSignInButton();
    frontendHelper.waitUntilElementPresent(
      this.authenticationFailed,
      timeouts.loginTimeout
    );
    frontendHelper.expectElementPresence(
      this.authenticationFailed,
      "Invalid credentials message is not displayed when logging in with incorrect credentials"
    );
  },

  verifyLogin() {
    frontendHelper.enterInput(
      this.emailInputField,
      "automationPractice13@gmail.com"
    );
    frontendHelper.enterInput(this.passwordInputField, "Sveikas123");
    this.clickSignInButton();
    frontendHelper.waitUntilElementPresent(
      this.myAccountText,
      timeouts.loginTimeout
    );
    frontendHelper.expectElementPresence(
      this.myAccountText,
      "MY ACCOUNT text is not displayed after logging in"
    );
  }
};
module.exports = login;
