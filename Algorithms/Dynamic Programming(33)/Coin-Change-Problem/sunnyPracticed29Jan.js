
//11:30 11:38 
const Coins = [1,2,3, 5]
const target = 6

//create dp 
const DP = new Array (Coins.length+1)

for(let i = 0;i<=Coins.length;i++){
	DP[i] = new Array (target+1).fill(0)
    for(let j = 0;j<=target;j++){
    
    	//Base case 
        if(j==0){
        	DP[i][j] = 0
        }else if(i==0){
        	DP[i][j] = Number.MAX_VALUE
        }else if(j>=Coins[i-1]){
        	DP[i][j] = Math.min(DP[i-1][j],1+DP[i-1][j-Coins[i-1]])
        }else {
        	DP[i][j] = DP[i-1][j]
        }
    }
}

console.log(DP[0][target-1])

