# Credt card 


************1234

const maskCard = (card) => {
  const lastFour = card.slice(-4);
  const maskedLength = card.length - 4;
  return "*".repeat(maskedLength) + lastFour;
};


# Find all missing number sum 


function missingSum(trasermap) {
    let min = Math.min(...trasermap);
    let max = Math.max(...trasermap);
    
    let totalExpectedSum = 0;
    for (let i = min; i <= max; i++) {
        totalExpectedSum += i;
    }
    
    let actualSum = trasermap.reduce((a, b) => a + b, 0);
    
    // Returns the total value mass of all missing elements combined
    return totalExpectedSum - actualSum; 
}

console.log(missingSum([1, 4, 8, 10])); // Output: 32


# 
769. Max Chunks To Make Sorted
768. Max Chunks To Make Sorted II

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    
    if (!arr || arr.length === 0) return 0;
    
    const n = arr.length;
    const rightMin = new Array(n);
    rightMin[n - 1] = arr[n - 1];
    
    for (let i = n - 2; i >= 0; i--) {
        rightMin[i] = Math.min(arr[i], rightMin[i + 1]);
    }
    
    let groups = 1;
    let leftMax = -Infinity;
    
    for (let i = 0; i <  n - 1; i++) {
        leftMax = Math.max(leftMax, arr[i]);
        if (leftMax <= rightMin[i + 1]) {
            groups++;
        }
    }
    
    return groups;
};
