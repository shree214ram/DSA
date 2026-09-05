Here is the $O(1)$ space math trick using modulo (`% 10`) and division (`Math.floor(num / 10)`) to check if an integer is a palindrome without converting it to a string:

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Negative numbers are not palindromes (e.g., -121 -> 121-)
    // Numbers ending in 0 (except 0 itself) cannot be palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversedHalf = 0;
    
    // Reverse only half of the number to prevent integer overflow
    while (x > reversedHalf) {
        reversedHalf = (reversedHalf * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    // For even length: x === reversedHalf (e.g., 1221 -> x = 12, reversedHalf = 12)
    // For odd length: x === Math.floor(reversedHalf / 10) (e.g., 121 -> x = 1, reversedHalf = 12)
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};

```