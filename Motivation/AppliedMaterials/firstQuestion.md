# first question :-
1. 
 input AAAAbbbbCdddd

 output 4A4bC4d
2. 
 input AAAAAAAAAAAAAAAAAbbbbCdddd

 output 9A8A4bC4d 

### Note :- Regular Expression and forget to stop while loop
<script>
 console.log(printString("AAAAbbbbCdddd"));
    function printString(S){
        for(let i=0;i<S.length;i++){
            if(["+",",","*","&","#","@"].includes(S[i])){
                return "Invalid String"
            }
        }
        for(let i=0;i<S.length;){
        console.log(i)
            let start =i,end=i;
            while(S[i+1]==S[i] && i<S.length){
                i++;
                end++;
            }
            console.log(start,"start");            
            console.log(end,"end");

            let str= ""
            if(end-start+1 > 9){
                str+= 9+S[start] 
                if((end-start+1 - 9) !=1) {
                   str+= (end-start+1 - 9)
                }
                
            }else{
                if((end-start+1 ) !=1) {
                   str+= (end-start+1)
                }
               
            }
            console.log(S[start],"S[start]")
            str+= S[start]
            
          //console.log(S.substring(0,start-1),"first");  console.log(S.substring(end+1),"end")
            S= S.substring(0,start)+str + S.substring(end+1)
        }
        return S
    }
</script>


3. 
 input AAAAAAAAAAAAAAAAAbbbbCdddd+++$

# output Invalid output 

second question :- 
see image withoutUsingReplaceAll.png
### Note :- 1. for get to fetch by class : he helped getElemenntsBYClass 2. din't read problem carefully no need to use replace or replace all 
