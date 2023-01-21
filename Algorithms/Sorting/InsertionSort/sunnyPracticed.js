//7:45 
let arr1=[1, 20, 15, 10, 9, 5];

//traverse from right to left in A1
for(let i=1;i<arr1.length;i++){
	let temp = arr1[i]
    //use insertion sort to 
    let j;
    for(j=i-1;j>=0 && arr1[j]>temp;j--){
    	arr1[j+1]=arr1[j]
    }
    arr1[j+1]=temp;
    
}
console.log(arr1);

