const base = require('./config.base');

const config = {
  capabilities: {
    browserName: 'firefox',
  },
};
exports.config = { ...base.config, ...config};