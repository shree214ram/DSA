//var coins = [1, 2, 3];
//output 4 {1,1,1,1,1},{1,1,1,2},{1,2,2},{1,1,3},{2,3}

 //include , exclude 
 
 function count(coins,n,sum){
 	if(sum==0){
    	return 1
    }
    if(n==0){
    	return 0
    }
    if(sum<=0){
    	return 0
    }
 	return count(coins,n,sum-coins[n-1])+count(coins,n-1,sum)
 }
//var coins = [1, 2, 3];
//const target = 5
//output 4 {1,1,1,1,1},{1,1,1,2},{1,2,2},{1,1,3},{2,3}

//var coins  = [2, 5, 3, 6]
//const target = 10
//Explanation: There are five solutions: 
//{2,2,2,2,2}, {2,2,3,3}, {2,2,6}, {2,3,5} and {5,5}.


var coins = [1, 2, 3];
const target = 4
//Explanation: there are four solutions: {1, 1, 1, 1}, {1, 1, 2}, {2, 2}, {1, 3}. 

 console.log("Result=>",count(coins,coins.length,target))