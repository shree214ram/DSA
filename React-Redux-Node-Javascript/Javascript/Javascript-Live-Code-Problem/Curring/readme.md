# Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

### Method 1.
function sum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1]; //its normal function 
  } else {
    return function(y) { return x + y; }; //its curring 
  }
}

### Method 2.
function sum(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) { return x + y; };
  }
}