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
    swap(A, lb , end) //why its going to be swapped 
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