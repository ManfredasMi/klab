module.exports = {
  generateLoginPayload: (email, passwd, back, SubmitLogin) => ({
    email,
    passwd,
    back,
    SubmitLogin
  })
};
