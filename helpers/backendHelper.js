const axios = require("axios");

const root = `http://automationpractice.com/index.php`;
const timeouts = require("../staticValues/constants.json");

const request = axios.create({
  timeout: timeouts.requestTimeout
});

module.exports = {
  request,
  addressLogin: `${root}?controller=authentication`,

  postRequestWithHeader(payload, url, header = {}) {
    return request
      .post(url, payload, { headers: header })
      .catch(error => error.response);
  },

  login(loginPayload) {
    return this.postRequestWithHeader(loginPayload, this.addressLogin);
  }
};
