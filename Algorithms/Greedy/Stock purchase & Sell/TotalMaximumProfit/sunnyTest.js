const A = [100,180,260,310,40,535,695]
let totalProfit = 0
let min = A[0]
let isCheck = false
for(let i=1;i<A.length;i++){
	console.log(A[i],min, A[i+1])
	if(A[i]>min && ((i == A.length -1) || (A[i+1]<=A[i]))){
    	console.log("I am in ")
    	isCheck = true 
        totalProfit+=A[i]-min
        min = A[i+1]
    }else if(A[i]<min){
    	min = A[i]
    }
}
console.log("Total Profit availabale are = ",totalProfit )
console.log(isCheck,"isCheck")

