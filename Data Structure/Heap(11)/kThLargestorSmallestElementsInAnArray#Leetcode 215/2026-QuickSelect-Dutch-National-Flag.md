/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    /*
        1. Brute force k loop N to the poer K time complaxity 
        2. Min Heap NLOGN
        3. Quick Select: 3 way Partition Dutch Flag Algorithms O(N)


    */
    const swap=(i,j)=>{
        [nums[i],nums[j]]=[nums[j],nums[i]]
    }
    let l=0;r=nums.length-1;
    let lt=l,i=l,gt=r;
    while(i<=gt){
        //------   -------  --------
        //Red       white   blue
        //dutch algo 
        while(lt<=gt){
            const pivotIndex=Math.floor(Math.random()*r-l) +l
            if(pivotIndex>k){
                lt++
                i++
                swap(lt,i)
            }else if (pivotIndex<k){
               gt--
                swap(gt,i)
            }else{
                i++
            }
        }
    }
    // console.log(nums,"nums")
    return nums[k]
}; I tried to solve 215 again with Dutch algo ? i know it has some mistakes please let mne know . one line 



Your code has three main structural bugs: you nested a second `while` loop inside the first, you compared `pivotIndex` directly to `k` instead of comparing element values (`nums[i]`) against the selected `pivot` value, and you need to update the search boundaries (`l` or `r`) outer-level based on where `target` falls relative to the `[lt, gt]` equal range.

Here is the corrected code:

```javascript
var findKthLargest = function(nums, k) {
    const target = nums.length - k;
    let l = 0, r = nums.length - 1;

    while (l <= r) {
        // 1. Pick a random pivot value (not index)
        const pivotIndex = Math.floor(Math.random() * (r - l + 1)) + l;
        const pivot = nums[pivotIndex];

        // 2. Run 3-Way Partitioning (Dutch National Flag)
        let lt = l, i = l, gt = r;
        while (i <= gt) {
            if (nums[i] < pivot) {
                [nums[lt], nums[i]] = [nums[i], nums[lt]];
                lt++;
                i++;
            } else if (nums[i] > pivot) {
                [nums[i], nums[gt]] = [nums[gt], nums[i]];
                gt--;
            } else {
                i++;
            }
        }

        // 3. Narrow the search range or return
        if (target >= lt && target <= gt) {
            return nums[target];
        } else if (target < lt) {
            r = lt - 1;
        } else {
            l = gt + 1;
        }
    }
};

```