var request = require('request');
/* this lambda does one thing: request a cached url from API GATEWAY */
exports.handler = function (event, context) {
  console.log('event:', JSON.stringify(event, null, 2)); // debug
  console.log('context:', JSON.stringify(context, null, 2)); // debug
  var packages = 'https://gm9oumnp1h.execute-api.eu-west-1.amazonaws.com/ci/trips?adults=2&children=3';
  console.log(packages);
  request(packages, function (error, response, body) { // request packages
    if (!error && response.statusCode === 200) {
      var json = JSON.parse(body);
      console.log('Packages Results:', json.result.length);

      var hotels = 'https://gm9oumnp1h.execute-api.eu-west-1.amazonaws.com/ci/hotels?hotelIds=139891,10002,99281';
      request(hotels, function (error, response, body) { // request packages
        if (!error && response.statusCode === 200) {
          var json = JSON.parse(body);
          console.log('Hotel Results:', json.result.length);
          context.succeed(json.result.length);
        }
      });
    }
  });
};
