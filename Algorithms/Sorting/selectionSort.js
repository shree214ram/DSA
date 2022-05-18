// https://www.geeksforgeeks.org/selection-sort/
//https://www.youtube.com/watch?v=9oWd4VJOwr0
/*
Selection Sorting work upon an array divided into two parts , one is sorted sub array and another one is unsorted subarray.
we trace unsorted array and we find minimum from unsorted array and we put it to at beginning in unsorted sub array.
Steps :- 
1. Sorted array would be empty in first .
2. Find minimum value from unsorted array .
3. We can use lineor search for minimum 
4. We are going to swap minimum value to beginner of unsorted sub array
*/
function selection_sort($arr, $n) {
    for (let $i = 0; $i < $n; $i++) {
        let $low = $i;
        for (let $j = $i + 1; $j < $n; $j++) {
            if ($arr[$j] < $arr[$low]) {
                $low = $j;
            }
        }

        // swap the minimum value to $ith node 
        if ($arr[$i] > $arr[$low]) {
            let $tmp = $arr[$i];
            $arr[$i] = $arr[$low];
            $arr[$low] = $tmp;
        }
    }
}

// Driver Code 
const $arr = [64, 25, 12, 22, 11];
$len = $arr.length;
selection_sort($arr, $len);
console.log("Sorted array : \n");

for (let $i = 0; $i < $len; $i++)
    console.log($arr[$i] + " ");

