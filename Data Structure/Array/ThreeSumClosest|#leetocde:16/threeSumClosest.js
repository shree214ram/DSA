// Javascript implementation of the above approach 

class GFG {

    // Function to return the sum of a 
    // triplet which is closest to x 
    solution(arr, x) {

        // Sort the array 
        arr.sort();
        console.log(arr)
        // To store the closets sum 
        let closestSum = 99999;

        // Fix the smallest number among 
        // the three integers 
        for (let i = 0; i < arr.length - 2; i++) {

            // Two pointers initially pointing at 
            // the last and the element 
            // next to the fixed element 
            let left = i + 1, right = arr.length - 1;

            // While there could be more pairs to check 
            while (left < right) {

                // Calculate the sum of the current triplet 
                let currentSum = arr[i] + arr[left] + arr[right];

                // If the sum is more closer than 
                // the current closest sum 
                if (Math.abs(x - currentSum) < Math.abs(x - closestSum)) {
                    closestSum = currentSum;
                }

                // If sum is greater then x then decrement 
                // the second pointer to get a smaller sum 
                if (currentSum > x) {
                    right--;
                }

                // Else increment the first pointer 
                // to get a larger sum 
                else {
                    left++;
                }
            }
        }

        // Return the closest sum found 
        return closestSum;
    }
}
// Driver code 

const arr = [-1, 2, 1, -4];
const x = 1;
const obj = new GFG();
console.log(obj.solution(arr, x));

/* This code is contributed by PrinciRaj1992 */
