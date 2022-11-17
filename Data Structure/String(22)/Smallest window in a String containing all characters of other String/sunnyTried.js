//10:12, 10:26
const string = "this is a test string"
//const A = string.replace(" ","").split("")
const A = string.split("")
const pat= "tist"
//Output: “t stri” 


//const string = "geeksforgeeks"
//const A = string.split("")
//const pat= "ork"

//Output: “ksfor”
const P = pat.split("")

let MinLength=Number.MAX_VALUE
for(let i=0;i<A.length;i++){
    if(P.includes(A[i])){
    	console.log(A[i],"Include")
        let localLength=1,count=1
        let start = i;
         console.log(localLength,"localLength")
         console.log(count,"count")
        for(let j=i+1;j<A.length;j++){
        console.log(localLength,"localLength inner")
         console.log(count,"count inner")
         console.log(A[j],"A[j]")
         localLength++
            if(P.includes(A[j])){//1
            	count++
           	 console.log(A[j],"Include inner")
              console.log(P.length ,"P.length")
              console.log( count," count")
                if(P.length == count){//2
                    MinLength = Math.min(localLength,MinLength)
                    count=1;
                    break;
                }//2
                /*else {
                    count++
                }*/
            }//1
            
        }
    }
}
console.log(MinLength,"MinLength")