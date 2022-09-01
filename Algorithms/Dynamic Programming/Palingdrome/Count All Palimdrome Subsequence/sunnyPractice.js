let s = "abcb";

//longest plaingdrome sub string 
//longest plaingdrome sub sequence 
// count of all palingdrome substring

// count of all palingdrome sequence

//make DP 
const DP = new Array(s.length).fill(0);
for(let i=0;i<s.length;i++){
	DP[i]=new Array(s.length).fill(0)
}
let countP = 0 
//fill 1 character itself palingdrome
for(let i=0;i<s.length;i++){
	DP[i][i]=1
}

//fill 2 length
for(let i=0;i<s.length;i++){
	if(s[i]==s[i+1]){
		DP[i][i+1]=1
        countP++
    }
}
//fill more than 2  length
for(let gap=2;gap<=s.length;gap++){
	for(let i=0;i<=s.length-gap;i++){
    const j = i+gap-1;
	if(s[i]==s[j]){
	//if(s[i]==s[j]){
		DP[i][j]=1 + DP[i][j-1] + DP[i+1][j] 
        countP++
    } else {
		DP[i][j]=DP[i][j-1] + DP[i+1][j] - DP[i+1][j-1]
    }
    }
}
console.log("count of all palingdrome sub,",DP[0][s.length-1])