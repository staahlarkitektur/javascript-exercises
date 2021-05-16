const helloWorld = require('./helloWorld.js');
var expect = require('chai').expect;

describe('Hello World', function() {
  it('says hello world', function() {
    expect(helloWorld()).equal('Hello, World!');
  });
});
