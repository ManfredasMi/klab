const helper = require("../helpers/backendHelper");
const validation = require("../helpers/validation");
const login = require("../payloads/login");
const scenarioData = require("../staticValues/scenarioData.json").backend.login;

describe("API login ", () => {
  it("Expect login request response status code to be valid", done => {
    helper
      .login(login.generateLoginPayload(scenarioData.loginCreds))
      .then(({ status }) => {
        validation.expectCondition(
          scenarioData.success.httpStatusCode,
          status,
          `login request returned invalid http status code. Was expecting ${scenarioData.success.httpStatusCode} but got ${status} instead`
        );
        done();
      });
  });
});
