// https://www.geeksforgeeks.org/maximum-product-subsequence-size-k/?ref=rp


there will be 4 case :- 

Following are different cases that arise in this problem.

### CASE I: if the maximum element of A is 0 and k is odd Here if we don’t include 0 in subsequence then product will be less than 0, Since the product of an odd number of negative integers gives a negative integer. Hence 0 must be included in the subsequence. Since 0 is present in subsequence, the product of subsequence is 0. Answer = 0.

### CASE II: if maximum element of A is negative and k is odd. Here the product will be less than 0, Since the product of an odd number of negative integers gives a negative integer. So to get the maximum product, we take the product of the smallest (absolute value wise) k elements. Since absolute value wise : | A[n-1] | > | A[n-2] | … > | A[0] |. Hence we take product of A[n-1], A[n-2], A[n-3], …. A[n-k] 

Answer = A[n-1] * A[n-2] * ….. * A[n-k]
### CASE III: if maximum element of A is positive and k is odd. Here in subsequence of k size if all elements are < 0 then product will be less than 0, Since the product of an odd number of negative integers gives a negative integer. Hence, at least one element must be a positive integer in the subsequence. To get max product max positive number should be present in the subsequence. Now we need to add k-1 more elements to the subsequence. 

Since k is odd, k-1 becomes even. So the problem boils down to case IV. Answer = A[n-1] * Answer from CASE IV.
### CASE IV: if k is even. Since k is even, we always add a pair in subsequence. So total pairs required to be added in subsequence is k/2. So for simplicity, our new k is k/2. Now since A is sorted, pair with the maximum product will always be either A[0]*A[1] OR A[n-1]*A[n-2]. In case of doubt about the previous statement think about negative numbers 🙂


