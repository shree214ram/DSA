// Program to print all  
// combination of size r 
// in an array of size n 


/*
Output : 1 2 3 
         1 2 4 
         1 2 5 
         1 3 4 
         1 3 5 
         1 4 5 
         2 3 4 
         2 3 5 
         2 4 5 
         3 4 5 
*/



// The main function that 
// prints all combinations  
// of size r in arr[] of  
// size n. This function  
// mainly uses combinationUtil() 
function printCombination($arr, $n, $r) {
    // A temporary array to  
    // store all combination 
    // one by one 
    let $data = [];

    // Print all combination  
    // using temprary array 'data[]' 
    combinationUtil($arr, $data, 0, $n - 1, 0, $r);
}

/* arr[] ---> Input Array 
data[] ---> Temporary array to 
            store current combination 
start & end ---> Staring and Ending 
                 indexes in arr[] 
index ---> Current index in data[] 
r ---> Size of a combination  
       to be printed */
function combinationUtil($arr, $data, $start, $end, $index, $r) {
    // Current combination is ready  
    // to be printed, print it 
    if ($index == $r) {
        for (let $j = 0; $j < $r; $j++)
            console.log($data[$j]);
            console.log("\n");
        return;
    }

    // replace index with all 
    // possible elements. The 
    // condition "end-i+1 >=  
    // r-index" makes sure that  
    // including one element at 
    // index will make a combination  
    // with remaining elements at  
    // remaining positions 
    for (let $i = $start;
        $i <= $end &&
        $end - $i + 1 >= $r - $index; $i++) {
        $data[$index] = $arr[$i];
        combinationUtil($arr, $data, $i + 1, $end, $index + 1, $r);
    }
}

// Driver Code 
$arr = [1, 2, 3, 4, 5];
$r = 3;
$n = $arr.length;
printCombination($arr, $n, $r);

