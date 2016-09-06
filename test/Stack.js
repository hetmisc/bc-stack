var stack = require('../Stack');
var assert = require('assert');

describe('Testing Stack', function() {

    it('We can push to an empty stack', function() {

        stack.push(3);
        assert(stack.values[0] === 3);
    });

});