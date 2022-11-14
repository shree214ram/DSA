//Input :  
const Arr =[3, 2, 1, 4]
 Arr.sort((a,b)=>a-b)
console.log(Arr,"Arr");
const k = 2
//Output : Min = 3, Max = 7

let min = Arr[0]

let FreeAmountTofee=0

for(let i=Arr.length-1;i>Arr.length-1-k;i--){
	FreeAmountTofee+=Arr[i]
}

let minAmount=0

for(let i=0;i<Arr.length-k;i++){
	minAmount+=Arr[i]
}

console.log(minAmount,"minAmount")
console.log(FreeAmountTofee,"maxAmount")
