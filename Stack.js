/**
 * Represents a stack (classic object)
 */
function Stack()
{
    this.values = [];
}

Stack.prototype.push = function(value) {
    this.values.push(value);
};

Stack.prototype.pop = function() {
    return this.values.pop();
};

Stack.prototype.peek = function() {

    if (this.values.length)
    {
        return this.values[this.values.length - 1];
    }
    else
    {
        return null;
    }
};

var s = new Stack();

s.push("Hello");
s.push("How are you?");

console.log(s.peek());

console.log(s.pop());

console.log(s.pop());

console.log(s.peek());