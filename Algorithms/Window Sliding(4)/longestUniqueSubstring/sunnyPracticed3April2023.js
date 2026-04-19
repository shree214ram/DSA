<!DOCTYPE html>
<html>
<body>

<h2>JavaScript const</h2>

<p id="demo"></p>

<script>
const A = "GEEKSFORGEEKS"
//2:25 //2:34 36
let maxLength = Number.MIN_VALUE;
let left = 0 
let start = 0 
const hash = new Map()
for(let i=0;i<A.length;i++){
    if(!hash.get(A[i])){
	    hash.set(A[i],1)
    }else{
            maxLength = Math.max(maxLength,i-left)
            //agar hame print karani h to :-if codition for checking current length with maxlength , if current length is greater than replace max length with current and change the start pointer 
            while(left<i){
                //twist
                if(hash.get(A[left]) != hash.get(A[i])){
                    hash.set(A[left],hash.get(A[left])-1)
                }else {
                    left++
                    break;
                }
                left++
            }
    }
}

console.log("maxLength", maxLength);
</script>

</body>
</html>
