



// https://www.youtube.com/watch?v=QN9hnmAgmOc

// Pivot
// |
// 7   6   10  5   9   2   1   15  7
// |                               |
// start                           end

// if(current element is less than or equal to  pivot than Increment the Index from 0 to 1, 1 to 2 ......)
// --------->
// else stop and change start at that point 
//      |
//       10  (start)

// if(current element is greater than or equal to  pivot than Decrement the Index from last to last-1, last-1 to last-2 ......)
// <----------
// else stop and change start at that point 
//                                |
//                                7(end)
//                                if(start < end){
//                                     if start is not crossed to end variable then 
                                    
//                                     swap (start and end)
//                                }

//                                if(start > end){
//                                if start is crossed to end variable then 

//                                swap (pivot and end)


// https://www.tutorialspoint.com/data_structures_algorithms/quick_sort_algorithm.htm

// function partitionFunc(start, end, pivot)
//    startPointer = start
//    endPointer = end - 1

//    while True do
//       while A[++startPointer] < pivot do
//          //do-nothing            
//       end while
		
//       while endPointer > 0 && A[--endPointer] > pivot do
//          //do-nothing         
//       end while
		
//       if startPointer >= endPointer
//          break
//       else                
//          swap startPointer,endPointer
//       end if
		
//    end while 
	
//    swap startPointer,end
//    return startPointer
	
// end function


function swap(A,a,b){
    let temp = A[a]
            A[a] = A[b]
            A[b] = temp
}
function partition(A,lb,up){
    start = lb
    end = up
    pivot = A[lb]
    while(start<end){
        while(A[start] <= pivot ){
            start++
        }
        while(A[end] > pivot ){
            end--
        }
        if(start<end){
            swap(A, start,end)
        }
    }
    swap(A, lb , end)
    return end
    
}
function quick_sort(arr, lb, up){
    if(lb<up){
        const p1= partition(arr,lb,up)
        quick_sort(arr, lb, p1-1)
        quick_sort(arr,  p1+1, up)
    }
    
    
}
const arr= [56 ,33,88, 67, 1, 60, 2]
const lb = 0
    const ub = arr.length-1
   
quick_sort(arr,lb,ub)
console.log("Final sorted array ==>",arr)