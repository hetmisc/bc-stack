var should = require('chai').should();
var stack = require('../Stack');

describe('#push', function() {
  
    it('pushes "test" onto stack', function() {
        stack.push('test');
        stack.pop().should.equal('test');
    });
});

describe('#pop', function() {

    it('pops "test" from stack', function() {
        stack.push('test');
        stack.pop().should.equal('test');
    });
});

describe('#peek', function() {

    it('peek "test" from stack', function() {
        stack.push('test');
        stack.peek().should.equal('test');
    });
});