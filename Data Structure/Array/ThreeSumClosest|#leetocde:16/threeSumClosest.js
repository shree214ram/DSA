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
            let ptr1 = i + 1, ptr2 = arr.length - 1;

            // While there could be more pairs to check 
            while (ptr1 < ptr2) {

                // Calculate the sum of the current triplet 
                let sum = arr[i] + arr[ptr1] + arr[ptr2];

                // If the sum is more closer than 
                // the current closest sum 
                if (Math.abs(x - sum) < Math.abs(x - closestSum)) {
                    closestSum = sum;
                }

                // If sum is greater then x then decrement 
                // the second pointer to get a smaller sum 
                if (sum > x) {
                    ptr2--;
                }

                // Else increment the first pointer 
                // to get a larger sum 
                else {
                    ptr1++;
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
