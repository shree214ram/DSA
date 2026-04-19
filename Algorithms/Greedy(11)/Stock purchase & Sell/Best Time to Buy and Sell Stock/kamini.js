const A = [4, 5, 2, 1, 6, 10, 4, 9, 11]
let min = A[0];
let max= 0;

for(let i=1; i<A.length; i++){

    if(A[i]<min){
        min=A[i]
    }
    let currentMax = A[i]-min;
    if(max< currentMax){
        max= currentMax;
    }
    
}
console.log(min, max, "result")
