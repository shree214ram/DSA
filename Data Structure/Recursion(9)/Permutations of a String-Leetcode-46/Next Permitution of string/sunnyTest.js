const str = "abc"
// abc
// acb

// bac
// bca

// cab
// cba

//abcd 
const l = 0
const r = str.length - 1
solve(str, l, r)
function solve(str, l, r) {
    //base Case 
    if (l == r) {
        console.log(str)
    }
    for (let i = l; i <= r; i++) {
        //swap 
        str = swap(str, l, i)

        //recursion 
        solve(str, l + 1, r)

        //Backtracking
        str = swap(str, l, i)
    }
}
function swap(str, l, r) {
    const arr = str.split("")
    let temp = arr[l]
    arr[l] = arr[r]
    arr[r] = temp
    return arr.join("")
}
//******  I tried as understand string as Array but String can work as Array but can't replace ****/
function swapTest(str, l, i) {
    console.log(str, "str give before swap")
    const temp = str[l]
    console.log(temp, "temp")
    console.log(str[i], "str[i]")

    str[l] = str[i]

    str[i] = temp
    console.log(str, "str give after swap")
    return str


}