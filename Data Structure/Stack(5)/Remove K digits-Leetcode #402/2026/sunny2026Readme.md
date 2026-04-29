# As I was doing study of Stack and Solved Next Left and Right Smallest and Next Left and Right Greater Element Problem
So i was following the patten and I tried 

sunny1Tried.jpg

![alt text](<DSA/Data Structure/Stack(5)/Remove K digits-Leetcode #402/sunny1Tried.jpg>)

then I relize that i need to handle Edge cases 
1. if 1,2,3,4,5 all increasing and no pop then k still remains 2 or 3 , i need to remove from last from stack 
2. if 0200 case then i need to remove 0 and return 200 


![alt text](<DSA/Data Structure/Stack(5)/Remove K digits-Leetcode #402/SunnyTried2.jpeg>)

then got correct logic 
<script>
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    const stack = [];

    for (let digit of num) {
        // While we have a budget AND current digit is smaller than the peak
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    // Edge Case 1: If we still have k left (e.g., num = "123", k = 1)
    // We remove from the end because it's already monotonically increasing
    while (k > 0) {
        stack.pop();
        k--;
    }

    // Edge Case 2: Leading zeros
    // Convert to string and remove "0" from the start
    let result = stack.join("");
    
    // Find first non-zero index
    let startIndex = 0;
    while (startIndex < result.length && result[startIndex] === '0') {
        startIndex++;
    }
    
    result = result.substring(startIndex);

    // Edge Case 3: If everything was removed or is "000"
    return result === "" ? "0" : result;
};

