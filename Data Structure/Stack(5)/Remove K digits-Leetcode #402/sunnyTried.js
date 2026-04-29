/*Recursion Approach :-
    1. Target hame pata he ki Array me se remove element ke bad bache hue element 
    2. 28179441 means hume pata he ki total length 8 and after remove k 3 elements Target is 5 
    3. hame chota element dhundna he from start 0 se Array ki length - k {lastIndex}
       lastIndex    2 8 1 7        9441
                    0     8-3     
                    
                    1 sabse chota mila to usko Res me push karo and
    4. Ab jo startIndex he vo last Ith Index jis par chota element mila +1 hoga 
    5. lastIndex ab jo hoga recursion function me vo hoga  A.length - (Target - Res.length) + 1
*/
let A1 = "28179441", k = 3
const A = A1.split("")
output = "1,7,4,4,1"

//let A1 = "1432219", k = 3
//Output: "1219"
const startIndex = 0, lastIndex = A.length - k, Res = [], Target = A.length - k
const response = solve(startIndex, lastIndex, Res, Target, A)

function solve(startIndex, lastIndex, Res, Target, A) {

    const Remaining = Target - Res.length

    //if remaing null
    if (Remaining == 0) {

        return Res.join(",")
    }
    //if remaing elemnts are the only elements which is required 

    if (startIndex + Remaining == A.length) {
        const remainigElements = A.slice(startIndex, A.length)
        console.log(Res.concat(remainigElements).join(","))
        return
    }
    let foundMinIndex = -1, minValue = Number.MAX_VALUE, i = startIndex
    while (i < lastIndex) {
        if (A[i] < minValue) {
            minValue = A[i]
            foundMinIndex = i
        }
        i++
    }
    Res.push(minValue)
    solve(foundMinIndex + 1, A.length - (Target - Res.length) + 1, Res, Target, A)

}