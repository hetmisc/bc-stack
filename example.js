var MyClass = {
    // these functions are the methods of the class
    foo: function() {
        console.log(this.x);
    },
    bar: function() {}
};

function MyClassConstructor(x, y) {
    // all instanaces will have MyClass as their prototype
    var o = Object.create(MyClass);
    // create the fields of the new instance
    o.x = x;
    o.y = y;
    return o;
}

var instance = MyClassConstructor(3,6);
instance.foo();
instance.bar();