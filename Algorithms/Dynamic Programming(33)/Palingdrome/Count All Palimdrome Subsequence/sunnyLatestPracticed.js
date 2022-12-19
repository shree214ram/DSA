//7:40
//count all palingdromes 
let str = "abcb";

const DP = new Array(str.length)

  
  for(let i=0;i<str.length;i++){
      DP[i] = new Array(str.length)
  }

  //set for length 1

  for(let i=0;i<str.length;i++){
      for(let i=j;j<str.length;j++){
        DP[i][j] = 1
    }
  }

  //set for length 2

  for(let i=0;i<str.length;i++){
      if(A[i]==A[i+1]){
        DP[i][i+1] = 1
    }
  }
  
//yaha se galat he program 
  for (let i=2;i<str.length;i++){
      for(let k=i;k<i+gap;i++){
			let j = gap + i - 1;

          if(str[i] == str[j]){
              DP[i][j]= 1+ DP[i][j-1]+  DP[i+1][j]
          }else {
              DP[i][j]=  DP[i][j-1]+  DP[i+1][j] - DP[i+1][j-1]
          }
      }
  }
