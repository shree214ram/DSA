https://www.youtube.com/watch?v=s7AvT7cGdSo
Backtracking: Permutations - Leetcode 46 - Python
https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/ (Non Duplicates)


https://www.youtube.com/watch?v=qhBVWf0YafA
Permutations II - Backtracking - Leetcode 47
https://www.geeksforgeeks.org/print-all-permutations-of-a-string-with-duplicates-allowed-in-input-string/ (Duplicates)

https://www.youtube.com/watch?v=UbyhOgBN834
Permutation in String - Leetcode 567 - Python


https://www.youtube.com/watch?v=va3NEycUxsg&t=1130s
Lecture39: Permutations of a String || C++ Placement Course
CodeHelp - by Babbar
62K views
7 months ago



all permitution of string 
https://www.youtube.com/watch?v=GuTPwotSdYw&list=RDCMUCnxhETjJtTPs37hOZ7vQ88g&start_radio=1
tech dose
String permutation algorithm | All permutations of a string


abc

permute(str, l,r){
    if(l==r){
        console.log(str,"")
    } else {
        for(let i=1;i<r;i++){
            //1. swap 
            str = swap(str,l,i)

            //2. permute
            permute(str,l+1,r)

            //3. backtracking
            str = swap(str,l,i)
        }
    }
}

let str = "ABC";
let n = str.length;
permute(str, 0, n-1);

