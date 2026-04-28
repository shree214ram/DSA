https://www.youtube.com/watch?v=zcnVaVJkLhY&ab_channel=TECHDOSE

https://www.geeksforgeeks.org/find-a-tour-that-visits-all-stations/

<script>
let start =0;
let net=0;
let totalNet=0;
let curNet=0
for(let i=0;i<gas.length;i++){
    net=gas[i]-cost[i]; //har index par kitna fuel bach raha he 
    totalNet+=net; //in the last kitna fuel bach raha he 
    curNet+=net; // ye varibale ye define karega ki Is index par kitna total fuel bach raha he , agar minus me he that means we need to switch to the next Index for New Tour 
    if(curNet<0){
        start=i+1;
        curNet=0;
    
    }
}
if(totalNet<0){
    return -1; // That means we have to check at very initial check , agar hamare pas in the last -ve negative totalNet Bach raha he that means Yaha possible nahi hoga koi bhi Tour 
}
return start;
