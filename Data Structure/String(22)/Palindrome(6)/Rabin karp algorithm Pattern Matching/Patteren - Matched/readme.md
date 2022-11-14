1. 2 hash map array 
2. CountP : first map array fill wil pattern and their total count will be {CountP = Total Addition value via Special Hash function}
3. CountS: second map array fill with string upto pattern length M , {CountS Total Addition value via Special Hash function}

Formula For Total Cost Of Current Window 
  0 1 2 -----------Index
  A B C 
  | | |
  1 2 3 -----------Hash Value
  Total = 0 
    for (){
        Total = (Total + Hash Value * 26 To Power Index ) % P 
    }
    
for(i=M;i<n){
    if(CountP==CountS){
        if(matched count){
            //Noe check every element
            for(i=0;window string length){
                if(Count[i] !== CountS[i]){
                    return false
                }
            }
            //patturn matched
            push index in Result Array
        }
    }
}
