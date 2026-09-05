const str = ["a","b","c"]
const Result = []
solve(str, [], 0)
console.log(Result)
function solve(str, temp, index) {
    /*console.log(str, "str")
    console.log(index, "index")
    console.log(temp, "temp")
    */
    //base case 
    //If index reach to end of the string then add in result 
    if (str.length == index) {
    	Result.push(temp)
        //console.log(temp, "---->")
        return
    }

    //recursion use for next 
    const newTemp = [...temp,str[index]]
    const res = solve(str, newTemp, index + 1) + solve(str, temp, index + 1)
    //calculation Include + Exclude 
}
