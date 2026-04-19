<script>
//11:10 code write
//11:20 code bug finding 
const A = [1,2,3,5,11,12,101,102,103,104];
let h= new Map();
for(let i=0; i <A.length; i++){
  if(!h.get(A[i])){
    h.set(A[i], 1);
  }
}
console.log(h, "hash")
let max = 0;
for(let i=0; i<A.length; i++){
console.log(A[i]-1, "A[i]-1");
console.log(h.get(A[i]-1), "h.get(A[i]-1)");

   let currentMax= 1;
   if(!h.get(A[i]-1)){
      
      console.log(A[i+1]==A[i]+1, "A[j]==A[i]+1");
     
      while(A[i+1]==A[i]+1){
      console.log("in while");
       console.log(A[i+1],"A[j]");      
       console.log(A[i]+1,"A[i]+1");

        currentMax++;
        console.log(currentMax,"cm")
        i++;
      }
   }else{
      break;
   }
   max= Math.max(max, currentMax);
   
}
console.log(max,"max");
</script>