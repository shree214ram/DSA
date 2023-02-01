<script>
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
</script>


1. bar 
2. bar

1. undefined  // why because its a IIFE function and it will not able to find this.foo because , here this is the inner scope of IIFE and foo is defined in outer object 
2. bar // in IIFE can't access outer this.foo but it can understand the outer scope reference value 