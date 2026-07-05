/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const res=[]
    const swap=(A,i,j)=>[A[i],A[j]]=[A[j],A[i]]
    const rec=(index,arr)=>{
        if(index>nums.length) return 
        if(index==nums.length) {
            res.push([...arr])
            return
        } 
        for(let i=index;i<nums.length;i++){
            swap(nums,i,index)
            rec(index+1,[...arr,nums[i]])
            swap(nums,i,index) //Backtrack
        }
    }
    rec(0,[])
    return res;
}; 47 per2 : 25 min reamining , please give me small hint as interviewer no code no solution 


**Interviewer:** "Since the input contains duplicate numbers, swapping identical values into the same `index` position during the same loop level will generate duplicate permutations. How can you track which numbers you have *already* used at the current level so you can skip repeating them?"


i am thining to use one hash map for position like 0,1,2 and i will insert the numbers at thier position like 1,1,2 0:[1,2] 1: [2,1] ? will that work Or can i Use a simple hash for current permitute ike [1,1,2] as direct key 1_1_2 so next time when this permutation comes it will not insert in Result ? one ine 

**Interviewer:** "Using a global map or a string key like `'1_1_2'` at the end works to filter out duplicates, but that forces your code to waste precious time generating duplicates first. Instead, if you use a fresh, local `Set` *inside* each recursive call to remember which values have already been swapped into the current `index`, you stop the duplicates from ever being born!"


Itried but still giving the same duplicate result : /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const res = []
    const swap = (A, i, j) => [A[i], A[j]] = [A[j], A[i]]
    const rec = (index, arr) => {
        if (index > nums.length) return
        if (index == nums.length) {
            res.push([...arr])
            return
        }
        const h = new Set()
        for (let i = index; i < nums.length; i++) {
            swap(nums, i, index)
            if (!h.has(index)) {
                rec(index + 1, [...arr, nums[i]])
            } else {
                h.add(index)
            }
            swap(nums, i, index) //Backtrack
        }
    }
    rec(0, [])
    return res;
}; one line hint 

**Interviewer:** "You put `index` inside the Set, but `index` stays exactly the same throughout the entire loop! You need to store and check the **actual value** you are trying to put there—which is `nums[i]`—and you must check the Set *before* you do the swap so you don't execute a duplicate path!"


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const res = []
    const swap = (A, i, j) => [A[i], A[j]] = [A[j], A[i]]
    const rec = (index, arr) => {
        if (index > nums.length) return
        if (index == nums.length) {
            res.push([...arr])
            return
        }
        const h = new Set()
        for (let i = index; i < nums.length; i++) {
            
            if (!h.has(nums[i])) {
                swap(nums, i, index)
                rec(index + 1, [...arr, nums[i]])
                swap(nums, i, index) //Backtrack
            } else {
                h.add(nums[i])
            }
        }
    }
    rec(0, [])
    return res;
}; still same ? one line hint

**Interviewer:** "You are missing `h.add(nums[i])` *inside* the `if` block, which means you check the Set but never actually remember the number for the next iterations of the loop! Put `h.add(nums[i])` right before your swap, and remove the `else` block entirely."


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const res = []
    const swap = (A, i, j) => [A[i], A[j]] = [A[j], A[i]]
    const rec = (index, arr) => {
        if (index > nums.length) return
        if (index == nums.length) {
            res.push([...arr])
            return
        }
        const h = new Set()
        for (let i = index; i < nums.length; i++) {
            
            if (!h.has(nums[i])) {
                h.add(nums[i])
                swap(nums, i, index)
                rec(index + 1, [...arr, nums[i]])
                swap(nums, i, index) //Backtrack
            } else {
                // h.add(nums[i])
            }
        }
    }
    rec(0, [])
    return res;
}; sorry but repeated removed still result not coming ? one line 


**Interviewer:** "The logic is now flawless, but because you are swapping elements inside `nums` on line 21, the value of `nums[i]` *changes* right after the swap—meaning your `rec(index + 1, [...arr, nums[i]])` call on line 22 is sending the newly swapped number instead of the original one! Change that parameter from `nums[i]` to `nums[index]` (or capture the original value in a variable before swapping) and you will instantly pass all test cases!"

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const res = []
    const swap = (A, i, j) => [A[i], A[j]] = [A[j], A[i]]
    const rec = (index, arr) => {
        if (index > nums.length) return
        if (index == nums.length) {
            res.push([...arr])
            return
        }
        const h = new Set()
        for (let i = index; i < nums.length; i++) {
            if (!h.has(nums[i])) { //just to check the Repeated value 
                h.add(nums[i])
                swap(nums, i, index)
                // rec(index + 1, [...arr, nums[index]]) //Main Mistake I can direct send nums because it has been new permute It was giving 7 ms and after that 3 ms 
                rec(index + 1, nums)
                swap(nums, i, index) //Backtrack
            } 
        }
    }
    rec(0, [])
    return res;
};

when I comoared to Permutation 1 all the things 95% same only hash map is the speecial thng . 