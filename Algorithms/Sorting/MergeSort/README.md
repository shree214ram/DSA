//https://www.geeksforgeeks.org/merge-sort/

Like QuickSort, Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one. See following C implementation for details.

MergeSort(arr[], l,  r)
If r > l
     1. Find the middle point to divide the array into two halves:  
             middle m = (l+r)/2
     2. Call mergeSort for first half:   
             Call mergeSort(arr, l, m)
     3. Call mergeSort for second half:
             Call mergeSort(arr, m+1, r)
     4. Merge the two halves sorted in step 2 and 3:
             Call merge(arr, l, m, r)
                1. we will make two different array Left and Right :-
                        Const L = []
                        const R = []
                        const n1 = m-l+1
                        const n2 = r-m 
                        then we will fill Left and Right array via 2 for loop
                        1. for loop (i = 0 to i< n1 ) and fill L[i] array[l+i]
                        2. for loop (j = 0 to i< n2 ) and fill L[i] array[m + 1 + j]
                2. We will again merge above two array L and R :- 
                        1. we will check if current should be less then both array
                        let m,n= 0 
                        let k = l(first element of array)
                        while ( m< n1 && m < n2 ){
                                if(L[m]<=R[n]){
                                        arr[k] = L[m]
                                        m++
                                } else {
                                      arr[k] = R[n]
                                        n++   
                                }
                                k++
                        }
                        2. remaining elements from both the arrays  L Or R 
                        while (m < n1){
			        arr[k] = L[m];
                                m++
                                k++
                        }
                        while (n < n2){
                                arr[k] = L[n];
                                n++
                                k++
                        }
                        
