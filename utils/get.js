const request = require('request');

module.exports = (url) => {
  return new Promise((onResolve, onError) => {
    request(url, function (error, response, body) {
      if (error) {
        onError(error);
      } else {
        onResolve(JSON.parse(body))
      }
    });
  });
}
