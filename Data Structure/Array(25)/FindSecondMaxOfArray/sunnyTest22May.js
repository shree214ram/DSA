//second largest element inthe array 

const A = [1,7,9,5,8,11] // 8

let first = A[0];
let second = A[1]

if(first < second){
	first = second ;	
    second = A[0] ;

}

for(let i=2;i<A.length;i++){
	if(A[i]>first){
    	second = first
    	first = A[i]

    }else if(A[i]>second && A[i]<first){
    	second = A[i]
    }
}
console.log(first,second)