//https://www.geeksforgeeks.org/find-k-closest-elements-given-value/

// find clouser {}
// compare left and right { But only K elements }
// if right elements not available print left all { But only K elements }
// if left not available then print right all { But only K elements }
// k 
function findCrossover(myArray, $target, low, high) {

    // Corner cases  
    if ($target <= myArray[low])
        return myArray[0];
    if ($target >= myArray[high])
        return myArray[high];

    // Doing binary search  
    $i = 0;
    $j = high + 1;
    $mid = 0;
    while ($i < $j) {
        $mid = ($i + $j) / 2;

        if (myArray[$mid] == $target)
            return myArray[$mid];

        /* If target is less than array element,  
            then search in left */
        if ($target < myArray[$mid]) {

            // If target is greater than previous  
            // to mid, return closest of two  
            if ($mid > 0 && $target > myArray[$mid - 1])
                return findCrossover(myArray, $target, myArray[$mid - 1],
                    myArray[$mid]);
            /* Repeat for left half */
            $j = $mid;
        }

        // If target is greater than mid  
        else {
            if ($mid < high &&
                $target < myArray[$mid + 1])
                return findCrossover(myArray, $target, myArray[$mid],
                    myArray[$mid + 1]);
            // update i  
            $i = $mid + 1;
        }
    }

    // Only single element left after search  
    return myArray[$mid];
}

// Method to compare which one is the more close.  
// We find the closest by taking the difference  
// between the target and both values. It assumes  
// that val2 is greater than val1 and target lies  
// between these two.  
function getClosest(myArray, k, x) {
    const l = findCrossover(myArray, k, x, myArray.length)
}

// Driver code  
const k = 4, x = 35
const myArray = [12, 16, 22, 30, 35, 39, 42,
    45, 48, 50, 53, 55, 56];
getClosest(myArray, k, x);  