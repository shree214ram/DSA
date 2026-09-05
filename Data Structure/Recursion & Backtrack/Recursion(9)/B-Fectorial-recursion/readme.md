### Write a program to calculate the fectorial of  n 
Fectorail 5 = 5 * 4 * 3 * 2 * 1 

<script>
    const n=5
    let res = 1
    solve(n)
    console.log("result=",res)
    function solve(n){
        //base case 
        if(n<=0){
            return 
        }
        
        //calculation 
        res*= n
        
        //recursion 
        return solve(n-1)
    }
</script>

