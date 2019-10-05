module.exports = {
  expectCondition(expected, actual, errorMessage) {
    expect(actual).toBe(expected, `ERROR: ${errorMessage}`);
  }
};
