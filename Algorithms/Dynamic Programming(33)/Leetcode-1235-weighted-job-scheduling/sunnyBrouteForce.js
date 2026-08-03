/*steps
1. sort via profit (NlogN)
2. pickup max one and set oldStart = start, oldEnd= end , MaxProfit = profit of first pickup
3. for next just check if (current end < old start && current start < current Add ) {maxProfit+=current profit}
*/
const Arr = [[1, 2, 50],[3, 5, 20],[6, 19, 100],[2, 100, 200]]
Arr.sort((a,b)=>b[2]-a[2])

let maxProfit = Arr[0][2]
let start = Arr[0][0]
let end = Arr[0][1]

for(let i=1;i<Arr.length;i++){
	if(Arr[i][1]<=start && Arr[i][0] < start ){
    	maxProfit+=Arr[i][2];
        start = Arr[i][0]
		end = Arr[i][1]
    }
}
console.log("Maximum Profit=>",maxProfit)