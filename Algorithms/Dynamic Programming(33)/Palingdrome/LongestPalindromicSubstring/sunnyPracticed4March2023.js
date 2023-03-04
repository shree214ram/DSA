
//11:38 Longest palingrom substring
const str = "abczqzcbuuuu"

//DP 
const DP = new Array(str.length).fill([]).map(obj=>new Array(str.length).fill([0]))

//max length 
let maxLength = Number.MIN_VALUE
let start = null
//for length 1 

for(let i=0;i<str.length;i++){
	DP[i][i]= 1;
    maxLength = 1
    start = i
}

//for length 2 

for(let i=0;i<str.length;i++){
	
    if(str[i] === str[i+1]){
        	DP[i][i+1]= 1
             maxLength = 2
             start = i
    }
}

//for length more than 2  

for(let gap=2;gap<str.length;gap++){
	for(let i=0;i<str.length-gap;i++){
    	let j = i+gap-1;
        if(str[i] === str[j] && DP[i+1][j-1] == 1){
                DP[i][j]= 1
                if(Math.max(maxLength,gap)>maxLength){
                maxLength= Math.max(maxLength,gap)             
                start = i
                }

        }
    }
}

console.log("MaxLength = ",maxLength);

console.log("String is  = ",str.substr(start,maxLength));

