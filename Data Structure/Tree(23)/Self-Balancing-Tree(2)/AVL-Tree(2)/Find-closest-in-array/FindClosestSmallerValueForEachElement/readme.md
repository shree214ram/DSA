https://www.geeksforgeeks.org/find-closest-smaller-value-for-every-element-in-array/
### 1. GFG Tree Set Solution :-
Steps:- 
1. Insert all array elements into a TreeSet
    var ts = new Set();
    for (i = 0; i < arr.length; i++)
        ts.add(arr[i]);

2.  Traverse arr Array {
    Find largest smaller element for every
    1. sort array in desc 
    2. find the current element index {indexOf}
    3. return the value of [current Index + 1]

    // array element
    for (i = 0; i < arr.length; i++) {
        var smaller = upper_bound(ts, arr[i]);
        if (smaller == null)
            document.write(-1 + " ");
        else
            document.write(smaller + " ");
    }
}
function upper_bound(s, val)
{
    let temp = [...s];
    temp.sort((a, b) => b - a); // sort in desc order 
    return temp[temp.indexOf(val) + 1];
}

### 2. AVL Tree  Solution :-
    see SunnyAVLTreeCode.js code Same Problem in AVL Tree also 
