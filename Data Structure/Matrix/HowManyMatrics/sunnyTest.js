let Arr = [
    [00],
[01],
[10],
[11],
[12],
[20],
[21],
]
let finalAnswer = 0
for(let i=3;i<Arr.length;i++){
	let left =0
	let right =0
    let k=0;
    for(let j=i-3;j<=i;j++){
        if(k==0 || k==3){
            left+=Arr[0]
        }else{
            right+=Arr[0]
        }
        k++
    }
    if(left==right){
    	finalAnswer++;
    }
}
console.log(finalAnswer,"finalAnswer")