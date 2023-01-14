console.log("hi");

//input: "a2b3c4"   12 a34b23
//output: aabbbcccc

// 1. string and number

// "a   22   b  3  c  4"
function convert(input) {
  const stringToArray = input.split("");
  console.log(stringToArray[0]);
  console.log(stringToArray[1]);
  const strArray = [];
  const numberArray = [];
  //stringToArray.forEach(element => {
  for (let i = 0; i < stringToArray.length; ) {
    const element = stringToArray[i];
    // const num = ["0","1","2","3","4","5","6","7","8","9"]
    if (
      typeof element === "string" &&
      Number(element)
      // !num.includes(element)
    ) {
      strArray.push(element);
      i++;
    }
    if (typeof element === "number") {
      let number = element;
      while (typeof stringToArray[i] === "number") {
        number = number + stringToArray[i];
        i++;
      }
      numberArray.push(number);
    }
  }
  console.log(strArray);
  // const output = "";

  // });
}
convert("a2b3c4");
//console.log()

// 2 num
// 222

// correct Solution :-
const s = "a3b3c4";
   const n = s.length;
   let w = "";
   for(let i=0;i<n;i++) {
      if(s[i] >= '0' && s[i] <= '9') {
          for(let j=0;j<s[i]-'0';j++) {
              w += s[i-1];
          }
      }
   }
  console.log(w)