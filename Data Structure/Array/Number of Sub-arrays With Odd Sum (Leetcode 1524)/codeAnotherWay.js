function NumOfSubarrays(nums) {
        let = nums.length;     
        let even = 1;
        let odd = 0;
        const mod = 1000000007;
        let curSum = 0;
        let res =0;
        for(let i=0;i<n;i++)
        {            
            curSum +=nums[i];
            if(curSum%2==0)
            {
                res = res+odd;
                even++;
            }
            else
            {
                odd++;
                res = res+even;
            }
            res = res % mod;
        }
        return res;
    }

let ar = [ 5, 4, 4, 5, 1, 3 ];
let n = ar.length;

document.write("The Number of Subarrays " +
				"with odd sum is " +
				NumOfSubarrays(ar));