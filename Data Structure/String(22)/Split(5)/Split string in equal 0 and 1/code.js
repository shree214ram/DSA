//https://www.geeksforgeeks.org/split-the-binary-string-into-substrings-with-equal-number-of-0s-and-1s/
//const str = "0100110101"
const str = "0111100010"

let count = 0
let str0 = 0
let str1 = 0
for(let i=0;i<str.length;i++){
	const A = str;
  if(A[i]==0){
      str0++

  }
  if(A[i]==1){
      str1++

  }

  if(str0 == str1){
  	count++
    str0 = 0
	str1 = 0
  }
}
console.log("count =",count)


