<script>
//smallest window print
const pat = "abc";
const str = "abdfcbak"
//2:7 2:41 //3:14

const pmap = new Map();
const smap = new Map();

for(let i=0;i<pat.length;i++){
	if(pmap.get(pat[i].charCodeAt(0))){
    	pmap.set(pat[i].charCodeAt(0),pmap.pat(apt[i].charCodeAt(0))+1)
    }else{
    	pmap.set(pat[i].charCodeAt(0),1)
    }
}


let start =0;
let min = Number.MAX_VALUE;
let count = 0 ;
for(let i=0;i<str.length;i++){

	//setupsmap
	if(smap.get(str[i].charCodeAt(0))){
    	smap.set(str[i].charCodeAt(0),smap.get(str[i].charCodeAt(0))+1)
    }else{
    	smap.set(str[i].charCodeAt(0),1)
    }

	//check pamap ka banda smap he and chota 
  
	if(pmap.get(str[i].charCodeAt(0)) && smap.get(str[i].charCodeAt(0))<= pmap.get(str[i].charCodeAt(0))){
    	count++
    }
    
    //mini
    if(count==pat.length){
        //choti widow 
        while(start<str.length && (!pmap.get(str[start].charCodeAt(0)) || pmap.get(str[start].charCodeAt(0)) < smap.get(str[start].charCodeAt(0)))){
        	start++
        }
        
        //find the minimum window 
        min = Math.min(min,i-start+1)
    }
}

console.log(str.substr(start,min))

</script>