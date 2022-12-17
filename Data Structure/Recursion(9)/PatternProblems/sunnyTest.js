const string = "1??0?101"
/*
    Prepare the indexed array on which ? is found
*/
const indexArray = []
const arr = string.split("")
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "?") {
        indexArray.push(i)
    }
}
//[1,2,4] ? index array
const replaceValuesArr = [0, 1]
const result = []
solve(0, indexArray, string, result, replaceValuesArr);
console.log("Result=>", result)
function solve(index, indexArray, string, result, replaceValuesArr) {
    //Base Case 
    // if we cross the last "?" index 
    if (index > indexArray.length) {
        return result
    }
    //calculation and 
    // if we completed the last "?"" index then push into result array 
    if (index == indexArray.length) {
        result.push(string)
    }
    //recursion 
    let temp = ""
    //Swaping ? with replaceValuesArr [0 and 1] 
    for (let i = 0; i < replaceValuesArr.length; i++) {
        temp = swap(replaceValuesArr[i], string, indexArray[index]);
        solve(index + 1, indexArray, temp, result, replaceValuesArr);
    }
}
//Swaping function for swap perticular index with respective value 
function swap(value, string, index) {
    const Arr = string.split("")
    Arr[index] = value
    const replacesStr = Arr.join("")
    return replacesStr
}

