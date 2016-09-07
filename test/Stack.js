var stack = require('../Stack');
var assert = require('assert');

describe('Testing Stack', function() {

    it('We can push to an empty stack', function() {
        stack.values = [];
        stack.push(3);
        assert(stack.values[0] === 3);
    });

    it('Gets "undefined" when poping from an empty stack', function() {
        stack.values = [];
        var result = stack.pop();
        assert(result === undefined);
    });

    it('Peek returns last element in stack without removing it', function() {
        var testValue = "Test Value";       
        stack.values = [testValue];
        var result = stack.peek();
        assert(result === testValue);
        assert(stack.values[0] === testValue);
    });

});