function NumOfSubarrays_TLE(nums) {
        let n = nums.length; 
        console.log(n)
        //initialised count with 1 if first element is odd other wise 0
        let count = nums[0]%2==1?1:0;
        const arr = new Array(n);
        //Make a comulative array arr[]  with array's first element
        arr[0]= nums[0];
        const mod = 1000000007;
        //Itteration for single element array like [5], [4], [4], [5], [1], [3]
        //Add  addition of (current element + previous index value of comulative array) in comulative array arr[]  and 
        //increment count with 1 if current element in loop is odd 
        for(let i=1;i<n;i++)
        {            
            if(nums[i]%2==1)
                count++;
            arr[i] = nums[i]+arr[i-1];
            if(arr[i]%2==1)
                count++;
        }
        count = count % mod;
        for(let i=1;i<n;i++)
        {
            
            for(let j=i+1;j<n;j++)
            {
                /*if(i==0)
                {
                    count+= arr[j]%2==1?1:0;
                }
                else*/
                {
                    count+=(arr[j]-arr[i] + nums[i])%2==1?1:0;
                }
                count = count % mod;
            }
        }
        return count;
    }
    let ar = [ 5, 4, 4, 5, 1, 3 ]
    const res = NumOfSubarrays_TLE(ar)
document.getElementById("demo").innerHTML = res;