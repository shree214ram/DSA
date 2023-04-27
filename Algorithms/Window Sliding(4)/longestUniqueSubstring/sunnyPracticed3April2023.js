<!DOCTYPE html>
<html>
<body>

<h2>JavaScript const</h2>

<p id="demo"></p>

<script>
const A = "GEEKSFORGEEKS"
//2:25 //2:34 36
let maxLength = Number.MIN_VALUE;
let start = 0
const hash = new Map()
for(let i=0;i<A.length;i++){
if(!hash.get(A[i])){
	hash.set(A[i],1)
         }else {
    maxLength = Math.max(maxLength,i-start)
        while(start<i){
        //twist
        if(hash.get(A[start]) != hash.get(A[i])){
    	    hash.set(A[start],hash.get(A[start])-1)
        }else {
            start++
            break;
        }
    	start++
    }
    }
}

console.log("maxLength", maxLength);
</script>

</body>
</html>
