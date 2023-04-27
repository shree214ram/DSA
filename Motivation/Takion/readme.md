<script>
// import "./styles.css";

// // document.getElementById("app").innerHTML = `
// // <h1>Hello Vanilla!</h1>
// // <div>
// //   We use the same configuration as Parcel to bundle this sandbox, you can find more
// //   info about Parcel
// //   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// // </div>
// // `;

function curry(func) {
  // implement this function
  
  
  
  // return  func(...arguments)

//   return function (b) {
//     const splitB = b.reduce((a, b) => a + b);
//     if (splitB) {
//       return func(spliA + splitB);
//     }
//     return spliA;
//   };

  // {
  // const spliA = a.reduce((a,b)=>a+b);
  // return function (b){
  //   const splitB = b.reduce((a,b)=>a+b)
  //   if(splitB){
  //     return func(spliA+splitB)
  //   }
  //   return spliA
  // }
  // }
}
function sampleFunction() {
  // some logic
}
const curriedFunction = curry(sampleFunction);
const res1 = curriedFunction(1, 2, 3);
const res2 = curriedFunction(1)(2,3);
const res3 = curriedFunction(1)(2)(3);

// function memoizer(func) {
//   // implement this function

//   const oldData = window.localStorage.data;
//   if (oldData) {
//     if (arguments.length !== oldData.length) {
//       return func(...arguments);
//     } else {
//       //check for each argument
//       for (let value of oldData) {
//         if (!arguments.includes(value)) {
//           return func(...arguments);
//         }
//       }
//       return oldData; //chaching data
//     }
//   } else {
//     return (window.localStorage.setItem("data") = func(...arguments));
//   }
// }
// function sampleFunction() {}

// //
// const memoizedFunction = memoizer(sampleFunction);
// const res1 = memoizedFunction(1, 2, 3);
// const res2 = memoizedFunction(1, 2);
/// res1 === res2 -> true
