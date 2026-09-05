//10:55
//const A = [1, 3, 2, 1, 5, 9]
//output 3
//const A =[2,3,1,1,4]
//output 2


const A = [1, 1, 2, 5, 2, 1, 0, 0, 1, 3]
//output 5 
const DP = new Array(A.length).fill(Number.MAX_VALUE)
//Initiate 0 to first index 
/*
    0th index DP value will be always 0 because we dont need to move from any one to here 
*/
DP[0] = 0
solve(A, DP, 0, A.length - 1)
if (
    DP[DP.length - 1] !== Number.MAX_VALUE
) {
    console.log("Minimum Steps to reach =", DP[DP.length - 1]);
} else {
    console.log("Not Posible")
}
/*
    A=Main Array, 
    DP= DP Table, 
    index= recursivly current index , first time this will be 0, 
    remaining= Last Index 
*/
function solve(A, DP, index, remaining) {

    //Base Case 
    /* Agar Hum recursion me ittrate karte karte Last tak pahuch gaye and Remaing target bhi 0 ho gaya means 
        Hum log sucessfully last index tak pahuch gaye 
    */
    if (index == A.length - 1 && remaining == 0) {

        return true;
    }

    //recursion 
    let currentIndexValue = A[index]
    /* Hum self index ki value utha kar uske same number of ittration karte he ,means hum utne tarike se age 
    Bad sakte he like  A = [1, 3, 2, 1, 5, 9] index 1 and value = 3 
    =========>>>*****"means hum 3 tarike se age bad sakte he ""*****<<<<<========
    1. index 1 to index 4 using value 3 in 1 jump
    2. index 1 to index 3 using value 2 in 1 jump
    3. index 1 to index 2 using value 1 in 1 jump
    
            |------------ current Index +3|
            |------current Index +2 |
            |--current Index +1 |
Values-    1   3                     
Index- 0   1                   2   3     4
    */
    while (currentIndexValue > 0) {
        if (DP.length > index + currentIndexValue) {
            //set DP Value with Minimum Steps to reach that Index 
            /*
                Next Bande tak pahuchne ki minimum DP Value = old/current bande tak pahuchne ki minimum step + 1
            */
            DP[index + currentIndexValue] = Math.min(DP[index + currentIndexValue],
                DP[index] + 1//A[index]
            )
            solve(A, DP, index + currentIndexValue, remaining - currentIndexValue)
        }
        currentIndexValue--
    }
    return false;
}