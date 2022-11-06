function solve(str,wordDict,DP){
	if(str.length==0){
    	return true
    }
    //check for left sustring
    for(let i=1;i<=str.length;i++){
    	if(DP[i] == false && wordDict.includes(str.substring(0,i))){
        	DP[i] = true
        }
        //If Left substring reach to "leet" which is exist in Dictionary then It will go to right substring to check 
        if(DP[i] == true){
        	//check for left sustring also true i reched at last index
                if(DP[i] == true && i==str.length){
                	return true
                }
    		//check for right sustring
        	for(let j=i+1;j<=str.length;j++){
            	//If Right substring reach to "code" which is exist in Dictionary then It will go to set true for right substring DP[j] true 
        		if(DP[j] == false && wordDict.includes(str.substring(i,j))){
                    DP[j] = true
                }
    			//check for right sustring also true with left and j reched at last index
                if(DP[j] == true && j==str.length){
                	return true
                }
        }	
    }
}
}
const str = "leetcode1";
const wordDict = ["leet", "code1"];

const DP = new Array(str.length+1).fill(false)
console.log(solve(str,wordDict,DP))