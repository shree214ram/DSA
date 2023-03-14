
// ---------------------------------------
 
const obj1 = {
  company: "Apple",
  make: {
    chip: "Apple",
    version: "v1.0"
  },
  model: "Macbook Air"
};

const obj2 = { ...obj1 };

obj2.model = "Macbook Pro";
obj2.make.chip = "Intel";

console.log(obj1);
//shalow and deep copy need to be done

// -----------------------------------------

let arr = [231, 2312, 1222, 11, 456, 877, 34565, 212, 12213, 34565, 12213];

for (let i = arr.length - 1; i < arr[0]; i--) {
  let temp = arr[i]
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
var output = (function () {
  delete x;
  return x;
})();

console.log(output);





console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48



// __proto__ and prototype


var async = {
  serial: function (fnArray, callback) {
  },


  parallel: function (fnArray, callback) {
  }
}




var first = function (callback) {
  console.log("starting first");
  setTimeout(function () {
    console.log("finished first");
    callback(null, "success first");
  }, 1000)
}


var sec = function (callback) {
  console.log("starting sec");

  setTimeout(function () {
    console.log("finished second");
    callback(null, "success second");
  }, 2000)
}


var third = function (callback) {
  console.log("starting third");
  setTimeout(function () {
    console.log("finished third");
    callback(null, "success second");
  }, 3000)
}

async.parallel([first, sec, third], function (err, res) {
  console.log("done")
  console.log("err n res-->", err, res)
})

async.serial([first, sec, third], function (err, res) {
  console.log("done")
  console.log(err, res)
})





var usr = {
  first: function () {
    console.log("firt this")
  },
  abc: function () {
    console.log("hi")
  },
  func: function () {
    console.log('bye')
  }
}

function before() {
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
    console.log("this.lives-->", this.lives);
  }
}
cat.jumps()
let c = new cat()
c.jumps()

//
Latest Interview topics in react.js and javascript: 20 Oct 2022→ Kamini Edited
>>
https://dev.to/frontendengineer/top-10-javascript-interview-questions-and-answers-you-should-know-junior-and-senior-3943
Must Watch^^^^^^   https://dev.to/frontendengineer/css-and-html-interview-questions-and-answers-270l


*Script sync and ScriptDefer 


Improve react application performance:::---
https://www.codementor.io/blog/react-optimization-5wiwjnf9hj
New  Topics:
1.       Throttling and debouncing
2.       React currying
3.       Prop drilling
4. React state lifting up → https://reactjs.org/docs/lifting-state-up.html




react memoization-> https://reactjs.org/docs/react-api.html
https://konstantinmuenster.medium.com/how-to-plan-and-organize-a-react-project-by-building-a-weather-app-95175b11bd01https://konstantinmuenster.medium.com/how-to-plan-and-organize-a-react-project-by-building-a-weather-app-95175b11bd01
**** Script async and defer?
https://javascript.info/script-async-defer


*** how to find and remove unused CSS ?
*** What is the latest in react 18 version that differs from other versions ?


https://www.linkedin.com/pulse/top-10-tricky-javascript-questions-i-used-ask-interviews-amit-pal/
https://in.indeed.com/career-advice/interviewing/tricky-javascript-interview-questions
https://plainenglish.io/blog/10-tricky-javascript-coding-interview-question-with-solution


https://www.sitepoint.com/5-typical-javascript-interview-exercises/


           Commonly asked question in all interviews:


HTML Web Components, Audio, Video, I frames, WebStorage
Css Flexbox, grid, positions, box modal, opacity, Sass/less features, mixins, selectors
Closure in deep with example
Hoisting
Currying
Prototype
Polyfills
Higher order functions
Promises
CallBacks


Let, const, var concepts and practicals
ES6 feature: spread, rest and destructuring
Event loops,
Call, apply and bind in deep with example
Most Important: Custom filter, map, reduce method via prototype 








