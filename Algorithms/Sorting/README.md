Here we will see some sorting methods. There are 200+ sorting techniques. We will see few of them. Some sorting techniques are comparison based sort, some are non-comparison based sorting technique.

Comparison Based Soring techniques are bubble sort, selection sort, insertion sort, Merge sort, quicksort, heap sort etc. These techniques are considered as comparison based sort because in these techniques the values are compared, and placed into sorted position in ifferent phases. Here we will see time complexity of these techniques.

Analysis Type	Bubble Sort	    Selection Sort	Insertion Sort	Merge Sort	Quick Sort	Heap Sort
Best Case	    O(n2)	        O(n2)	        O(n)	        O(log n)	O(log n)	O(logn)
Average Case	O(n2)	        O(n2)	        O(n2)	        O(log n)	O(log n)	O(log n)
Worst Case	    O(n2)	        O(n2)	        O(n2)	        O(log n)	O(n2)	    O(log n)
some sorting algorithms are non-comparison based algorithm. Some of them are Radix sort, Bucket sort, count sort. These are non-comparison based sort because here two elements are not compared while sorting. The techniques are slightly different. Now we will see the difference between them based on different type of analysis.

Analysis Type	Radix Sort (k is maximum digit)	Counting Sort (k is size of count array)	Bucket Sort (k is number of buckets)
Best Case	    O(nk)	O(n + k)	O(n + k)
Average Case	O(nk)	O(n + k)	O(n + k)
Worst Case	    O(nk)	O(n + k)	O(n2)
Sorting techniques can also be compared using some other parameters. Some sorting algorithms are in-place sorting algorithms, and some are out-place sorting algorithms. Those algorithms, that does not require any extra space is called in-place sorting algorithm. Such as quicksort, heapsort algorithms are in-place. But merge sort is out-place sorting technique.

Some algorithms are online and some are offline. If the algorithm accepts new element while the sorting process is going on, that is called the online sorting algorithm. From the above mentioned techniques, the insertion sort is online sorting technique.



=====================================================================================

	                                    Time	
Sort	                Average	        Best	    Worst	Space	    Stability	Remarks
Bubble sort	            O(n^2)	        O(n^2)	    O(n^2)	Constant	Stable	    Always use a modified bubble sort
Modified Bubble sort	O(n^2)	        O(n)	    O(n^2)	Constant	Stable	    Stops after reaching a sorted array
Selection Sort	        O(n^2)	        O(n^2)	    O(n^2)	Constant	Stable	    Even a perfectly sorted input requires scanning the entire array
Insertion Sort	        O(n^2)	        O(n)	    O(n^2)	Constant	Stable	    In the best case (already sorted), every insert requires constant time
Heap Sort	            O(n*log(n))	    O(n*log(n))	O(n*log(n))	Constant	Instable	By using input array as storage for the heap, it is possible to achieve constant space
Merge Sort	            O(n*log(n))	    O(n*log(n))	O(n*log(n))	Depends	Stable	On arrays, merge sort requires O(n) space; on linked lists, merge sort requires constant space
Quicksort	            O(n*log(n))	    O(n*log(n))	O(n^2)	Constant	Stable	Randomly picking a pivot value (or shuffling the array prior to sorting) can help avoid worst case scenarios such as a perfectly sorted array.