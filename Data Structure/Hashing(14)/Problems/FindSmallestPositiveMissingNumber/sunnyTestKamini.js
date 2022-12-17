// Find smallest Positive missing number

function solution(A) {
    // write your code in JavaScript (Node.js 14)
    // A.sort((a, b) => a-b);
    //1. set all ements in Hash Table 
    let hash = new Map();
    for(let i=0; i<A.length; i++){
        hash.set(Math.abs(A[i]), 1);

    }
    let smallest = A[0];
    for(let i=1; i<A.length; i++){
        //2. check if A[i] - smallest not exist and not equal to 0 then that is missing element 
        if(!hash.get(Math.abs(A[i]-smallest)) && hash.get(Math.abs(A[i]-smallest)) !== 0){
            console.log("Mssing =", Math.abs(A[i]-smallest));
          return false;
        } 
        //3. check if i reached to last element and A[i] - smallest {Retrun last element value +1} 
        else if(i == A.length-1 && hash.get(Math.abs(A[i]-smallest))){
          console.log("Missin elemnt=", A[i]+1);
          return false;
        }
    }
}

//const A = [1, 3, 6, 4, 1, 2];
const A = [1, 2, 3]
//const A = [−1, −3];
solution(A);