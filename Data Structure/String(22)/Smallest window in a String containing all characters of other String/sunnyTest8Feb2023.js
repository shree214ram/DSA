
//3:39
const str = "mnabac";
const pat = "aabc";


const pH = new Map();
const sH = new Map();

for(let i=0;i<pat.length;i++){
	if(!pH.get(pat[i].charCodeAt(0))){
    	pH.set(pat[i].charCodeAt(0),1)
    }else{
    	pH.set(pat[i].charCodeAt(0),pH.get(pat[i].charCodeAt(0))+1)
    }
}

let count =0 , start = 0, minlength=Number.MAX_VALUE;

for(let i=0;i<str.length;i++){

	if(!sH.get(str[i].charCodeAt(0))){
    	sH.set(str[i].charCodeAt(0),1)
    }else{
    	sH.set(str[i].charCodeAt(0),sH.get(str[i].charCodeAt(0))+1)
        
    }
    //if available only
    if(pH.get(str[i].charCodeAt(0))){
    console.log(pH,"===ph")
    	count++ //jab count equal ho
    }
    
    
    /*if(sH.get(str[i].charCodeAt(0))== pH.get(str[i].charCodeAt(0)) ){
    console.log(pH,"===ph")
    	count++ //jab count equal ho
    }*/
    console.log(sH,"sH");
    console.log(count,"count");    console.log(pat.length,"pat.length");

    if(count==pat.length){
    console.log("equal")
    	//find minimum window 
    	/*while(start<str.length && sH.get(str[start].charCodeAt(0))== pH.get(str[start].charCodeAt(0))){
        	
        	start++
        }*/
        
        while( sH.get(str[start].charCodeAt(0))>= pH.get(str[start].charCodeAt(0))
        
      ||  !pH.has(str[start].charCodeAt(0))
        
        ){
  console.log(!pH.get(str[start].charCodeAt(0)));  console.log(str[start].charCodeAt(0));    console.log(pH.has(str[start].charCodeAt(0)));
        
        	start++;
            if(start>=str.length)break;
            console.log(start,"check");

        }
        minlength = Math.min(minlength,i-start+1)
    }
}
console.log("minlength = ", minlength);

console.log("str is = ", str.substr(start,minlength));
