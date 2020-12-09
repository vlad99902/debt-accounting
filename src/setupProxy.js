const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy('/api/**', {
      target: 'https://debt-accounting-server.herokuapp.com',
    }),
  );
  app.use(
    proxy('/otherApi/**', {
      target: 'https://debt-accounting-server.herokuapp.com',
    }),
  );
};
