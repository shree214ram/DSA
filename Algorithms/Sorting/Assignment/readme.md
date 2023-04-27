# Point 4 
   ### A) Show that insertion sort can sort the n/k sublists, each of length k, in Θ(nk) worst-case time. 
        The procedure of insertion sort in non-increasing order is as below:
        INSERTION-SORT(A)
        For j=2 to A.length
        key=A[j]
        i=j−1
        while i>0 and A[i]<key
        A[i+1]=A[i]
        i=i−1
        A[i+1]=key
        The j loop is running from 2 to the length of the array and then value in the index of array is stored in the key variable. After that the variable j is decreased by 1 and stored in the variable i.
        Now, while loop is used in which two conditions are given: first condition is variable i is greater than 0 and the value of the array at index i must be less than key value.
        The value at index i is swapped at the index i−1 . The variable i is decreased by 1 and the key value is stored at the index i+1 . The only change in the insertion sort of non-decreasing order to non-increasing order is flip the condition.
        Analysis:
        The worst case running time of the insertion sort to sort a list of length n is O(N*N) . Therefore for sorting the n/k sublist of length k, the time taken by isnsertion sort is calculated as 

        O((K*K) * N/K ) = O(NK)

        Hence the worst case running time of insertion sort to sort the N/K sub list , each of length is O(NK)

   ### B) Show how to merge the sublists in Θ(n lg (n/k)) worst case time.
        There are n/k sub lists of length k and then merge the n/k sorted sub lists in a list of length n .
        For this, take two sublists and merge them simultaneously. The time taken by this process is lg(n/k) steps. Now, compare n elements in each step.
        Hence, the worst case running time to merge the sub listsis Θ(nlg(n/k)) .


   ### C) Given that the modified algorithm runs in Θ(nk +n lg(n/k)) worst-case time, what is the largest value of k as a function of n for which the modified algorithm has the same running time as standard merge sort, in terms of Θ-notation?


        Merge sort is a sorting algorithm that uses divide and conquer method. In merge sort, divide the input sequence in two halves and then sort them, Finally, merge the sorted halves.
        The modified algorithm has same running time as standard merge sort if Θ(nlg(n/k))=Θ(nlgn) and consider that k=Θ(lgn) .
          Θ(nlg(n/k))=Θ(nk+nlgn−nlgk)
        =Θ(nlgn+nlgn−nlg(lgn))
        =Θ(2nlgn−nlg(lgn))
        =Θ(nlgn)

        Hence, the running time of the modified algorithm has same as standard merge sort if Θ(nlg(n/k))=Θ(nlgn) and k=Θ(lgn) .

