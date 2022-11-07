//let num = 14
//output 6

let num = 8
//output 4
let steps = 0
while(num>0){
	if(num%2==0){
    	num/=2
    }else{
    	num-=1
    }
    steps++
}
console.log("Steps are => ", steps)