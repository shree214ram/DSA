//https://www.geeksforgeeks.org/find-a-triplet-in-an-array-whose-sum-is-closest-to-a-given-number/

Basically there are 3 methods same like Two sum 
1. Itrate 3 loop:-
    It takes o(n3) time compaxity
    closestSum = 0
    <!-- three for loop -->
    for (i){
        for(j){
            for(k){
                if(abs(X-closestSum) > abs(X-(array[i]+array[j]+array[k]))
            }
        }
    }
2. Two pointer :- 
    It takes o(n2) time compaxity and the sorting process is so lengthy like QuickSort 
    1. Sorting // array.sort()
    2. closestSum = 99999 // max
    3. outer loop for next count and inner loop will deside the Increase Left pointer Or Decrese Right Pointer 
       1. for(i=0 to i< arraySize>)
       3. Target = X  
       4. while(pointer1 < pointer2>){
           pointer1 = i+1 
           pointer2 = arraySiize-1 
           currentSum = array[i]+array[pointer1]+array[pointer2]
           abs(Target - closestSum ) > abs(Target - currentSum){
               closestSum =  currentSum
           }
           if(currentSum > targetSum){
               pointer2--
           }else {
               pointer1++
           }
       }
3. Hashing :-
    Not possible becasue the difference is not exactelly we are finding closest   . 
    

