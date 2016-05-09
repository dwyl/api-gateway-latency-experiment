var handler = require('../index').handler;
var assert = require('assert');

var CONTEXT = {
  functionName: 'LambdaAPIGatewayLatencyTest',
  functionVersion: '1',
  invokedFunctionArn: 'arn:aws:lambda:eu-west-1:655240711487:function:LambdaTest:$LATEST'
};

var EVENT = {

};

describe('Make Cached request to API Gateway', function () {
  it('invoke the lambda function handler', function (done) {
    CONTEXT.succeed = function () {
      console.log(' - - - - - - - - - - - - - - - - - - - - - - - - ');
      // console.log(arguments); // the argument to context.succeed
      assert(parseInt(arguments[0], 10) > 1);
      done();
    };
    handler(EVENT, CONTEXT);
  });
});
