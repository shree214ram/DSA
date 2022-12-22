//11:40
//count all plaingdrome in subsequence 
let str = "abcb";

const DP = new Array(str.length+1)
//set for length 1 
for(let i=0;i<DP.length;i++){
	DP[i] = new Array(str.length+1).fill(0) //first error
}

//set for length 1

for(let i=0;i<DP.length;i++){
		DP[i][i] = 1
}
//console.log(DP);

//set for length 2 

for(let i=0;i<DP.length;i++){
	if(str[i] == str[i+1]){
		DP[i][i+1] = 1 //3
    }
}

//length more than 2 
//first loop is for gap

for(let gap=2 ;gap<=str.length;gap++){
//2
	//second loop is for left end
	for(let i=0;i<=str.length-gap;i++){
    //1
		//third loop is for left end
    	let j = i+gap-1
        if(str[i]==str[j]){
        	DP[i][j]= 1+DP[i][j-1]+DP[i+1][j];
        }else{
        	DP[i][j]= DP[i][j-1]+DP[i+1][j]-DP[i+1][j-1]

        }
    }
}

console.log(DP[0][str.length-1]);
