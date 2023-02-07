const str1 = "hello world";
const str2 = "world hello";
 check(str1,str2)

function check (a,b){
	
	if(a.length != b.length){
    	console.log("No Possible"); return false;
    }else {

	const s1 = new Map();
    
      for(let i=0;i<a.length;i++){
      	
			if(s1.get(a[i].charCodeAt(0))){
            	s1.set(a[i].charCodeAt(0),s1.get(a[i].charCodeAt(0))+1)
            }else{
            	s1.set(a[i].charCodeAt(0),1)
            }
      }
      
       for(let i=0;i<b.length;i++){
			if(s1.get(b[i].charCodeAt(0))){
            	s1.set(b[i].charCodeAt(0),s1.get(b[i].charCodeAt(0))-1)
            }else{
            	console.log("Anagram is not possible");return false;
            }
      }
      
      
      for(let key of s1){
      	if(key[1]!==0){
      	console.log("There ia no anagram");return false;
        }
      }
      console.log("Anagram Possible")
      
    }
    
}

</script>
