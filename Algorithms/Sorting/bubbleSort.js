//https://www.geeksforgeeks.org/bubble-sort/?ref=gcse
//https://www.youtube.com/watch?v=o4bAoo_gFBU
/*
Bubble Sorting work upon repeatedly two adjecent element compare each other and then swap each other if they are not in correct order .
This steps not good for very long data because comration will be so much and then time complexity will be High 
Steps :- 

1. Pick two element from array from left side and .
2. compare if not in correct order then swap 
3. Again pickup next adjecent element and repeat step 1 and 2 

Outer loop for first adjecent 
Inner loop for second adjecent 
No of Passes (no of compararion) = No of element 
*/

function bubble_sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
}
const arr = [15, 16, 6, 8, 5]
bubble_sort(arr)
console.log("Final sorted array=>", arr)


/*
Optimized Bubble sort :- 

5 element 

Pass 1 :- (no of element -1)4 comparation {15,16}, {16,6}, {6,8} ,{8,5} => 15, 6, 8, 5 , 16
Pass 2 :- (no of element -2)3 comparation {15, 6}, {6, 8}, {8, 5}  =>  6, 8, 5, 15 , 16 (No Need to swap {5 , 16} because its already in correct order)
Pass 3 :- (no of element -3)2 comparation {6, 8}, {8, 5}  =>  6, 5 ,8, 15,  16 (No Need to swap {5, 15} and {15 , 16} because its already in correct order)
Pass 4 :- (no of element -4)1 comparation {6, 5} => 5,  6, 8, 15 , 16 (No Need to swap {5,8}{8, 15} and {15 , 16} because its already in correct order)
Not :- we seen in every pass comparation decreasing with respect to no of passes 
So Inner loop which is using for compare we can save via substract "i" value "arr.length - i - 1"
Pass 5 :- No Need to excecute pass no 5 , why becuase in PassNo = 4 (no of element -1)  ,
we finally reached at sorted array so we can save our last pass .
That we can do via "Break" outer loop with the help of one Flag (swap) 


*/

function optimized_bubble_sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let swap = true
        for (let j = 0; j < arr.length - i - 1; j++) {
            document.write("inner loop=>", j, "</br>")
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                swap = false
            }
        }
        if (swap) {
            break;
        }
    }
}
const arr = [56, 33, 88, 67, 1, 60, 2]
optimized_bubble_sort(arr)
document.write("Final sorted array=>", arr)



