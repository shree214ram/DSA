
//11;16 // 11:32
const A = [2, 3, 5]
const target = 7
const result = []
solve(A, 0, [], 0);
console.log(result, "result")
function solve(A, sum, temp, index) {
    //base case 
    if (sum == target) {
        result.push([...temp]) //@mistake 1 result.push(temp)
        return result
    }
    // 
    //@mistake 2 for(let i=0;i<A.length;i++){ 0 se start kar raha tha every time 
    for (let i = index; i < A.length; i++) {
        if (sum < target) {
            temp.push(A[i]);
            solve(A, sum + A[i], temp, i)
            temp.splice(temp.indexOf(A[i]), 1)
        }
    }
}



