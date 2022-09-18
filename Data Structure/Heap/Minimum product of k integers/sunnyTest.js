//Minimum product of k integers in an array of positive Integers

//https://www.geeksforgeeks.org/minimum-product-k-integers-array-positive-integers/?ref=lbp
//3:30
//const Input = [198, 76, 544, 123, 154, 675]
// const k = 2
//Output : 9348

const Input = [11, 8, 5, 7, 5, 100];
const k = 4;
//Output : 1400

// Navie Approach :- 
let minimum = 1000000000;
for(let i=0;i<Input.length-k;i++){
	let startMin = Input[i];
	for(let j=i+1;j<=Input.length-k;j++){
		let currentMin = startMin;
    	let m=0
        //sliding window 
    	while(m<k-1){
    		currentMin*=Input[j+m]
            m++
        }
    	minimum = Math.min(minimum,currentMin)
    }

}
console.log(minimum,"minimum final ====")