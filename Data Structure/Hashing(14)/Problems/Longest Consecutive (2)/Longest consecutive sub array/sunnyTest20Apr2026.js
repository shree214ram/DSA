// A cleaner, more professional version of your Map logic:
const numSet = new Set(nums);
let finalMax = 0;

for (let num of numSet) {
    // Only start if 'num' is the beginning of a sequence
    if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentMax = 1;

        while (numSet.has(currentNum + 1)) {
            currentNum++;
            currentMax++;
        }
        finalMax = Math.max(finalMax, currentMax);
    }
}