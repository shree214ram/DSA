function Inc(N) {

    if (N == 1) { 
        console.log(N);
				setTimeout(() => {
					console.log(N);
        });
        return;
    }

    Inc(N-1); 
    console.log(N);
    setTimeout(() => {
	  	console.log(N);
    }); 
}

Inc(4);

// ---------------------------------------
  
const obj1 = {
    company: "Apple",
    make: {
      chip: "Apple",
      version: "v1.0" 
    },
    model: "Macbook Air"
};

const obj2 = {...obj1};

obj2.model = "Macbook Pro";
obj2.make.chip = "Intel";

console.log(obj1);
//shalow and deep copy need to be done

// -----------------------------------------

let arr = [231, 2312, 1222, 11, 456, 877, 34565, 212, 12213, 34565, 12213];

for(let i=arr.length-1; i<arr[0]; i--){
  let temp= arr[i]
  coonsole.log(arr[temp]);
}



// -----------------------------------------
  
  
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}

///////////--------------OLD----------------/////
let x = 1;
var output = (function() {
  delete x;
  return x;
})();

console.log(output);





console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48



// __proto__ and prototype


var async = {
 serial:   function(fnArray, callback){
    },
 
 
 parallel: function(fnArray, callback){
    }
}
 
 
 
 
var first = function(callback){
   console.log("starting first");
 setTimeout(function(){
   console.log("finished first");
   callback(null,"success first");
}, 1000) 
}
 
 
var sec = function(callback){
   console.log("starting sec");
 
 setTimeout(function(){
   console.log("finished second");
   callback(null,"success second");
}, 2000) 
}
 
 
var third = function(callback){
 console.log("starting third");
 setTimeout(function(){
   console.log("finished third");
   callback(null,"success second");
}, 3000) 
}
 
async.parallel([first,sec,third],function(err,res){
 console.log("done")
 console.log("err n res-->",err,res)
})
 
async.serial([first,sec, three],function(err,res){
 console.log("done")
 console.log(err,res)
})
 
 
 
 
 
var usr = {
 first:function(){
   console.log("firt this")
 },
 abc:function(){
   console.log("hi")
 },
 func : function(){
   console.log('bye')
 }
}
 
function before(){
 console.log("before")
}
function methodize(usr) {
//code here
}
 
var usr1 = methodize(usr);
usr1.abc();
usr1.func();
 
 
 
 
var cat = {
  lives: 9,
  jumps: () => {
    this.lives--; 
console.log("this.lives-->",this.lives); 
  }
}
cat.jumps()
let c = new cat()
c.jumps()





