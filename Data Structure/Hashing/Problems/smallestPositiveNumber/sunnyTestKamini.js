// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 14)
    // A.sort((a, b) => a-b);
    let hash = new Map();
    for(let i=0; i<A.length; i++){
        hash.set(Math.abs(A[i]), 1);

    }
    let smallest = A[0];
    for(let i=1; i<A.length; i++){
        if(!hash.get(Math.abs(A[i]-smallest)) && hash.get(Math.abs(A[i]-smallest)) !== 0){
            console.log("Mssing =", Math.abs(A[i]-smallest));
          return false;

        } else if(i == A.length-1 && hash.get(Math.abs(A[i]-smallest))){
          console.log("Missin elemnt=", A[i]+1);
          return false;
        }

        
    }
}

//const A = [1, 3, 6, 4, 1, 2];
const A = [1, 2, 3]
//const A = [−1, −3];
solution(A);