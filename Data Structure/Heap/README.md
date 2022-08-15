https://www.geeksforgeeks.org/binary-heap/
https://www.growingwiththeweb.com/data-structures/binary-heap/overview/
https://www.geeksforgeeks.org/heap-data-structure/

https://www.geeksforgeeks.org/where-is-heap-sort-used-practically/

https://www.geeksforgeeks.org/applications-of-heap-data-structure/

@sunny
Heap is always a complete binary tree 

Binary Heap
A Binary Heap is a Binary Tree with following properties.
1) It’s a complete tree (All levels are completely filled except possibly the last level and the last level has all keys as left as possible). This property of Binary Heap makes them suitable to be stored in an array.

2) A Binary Heap is either Min Heap or Max Heap. In a Min Binary Heap, the key at root must be minimum among all keys present in Binary Heap. The same property must be recursively true for all nodes in Binary Tree. Max Binary Heap is similar to MinHeap.

Examples of Min Heap:

            10                      10
         /      \               /       \  
       20        100          15         30  
      /                      /  \        /  \
    30                     40    50    100   40
How is Binary Heap represented?
A Binary Heap is a Complete Binary Tree. A binary heap is typically represented as an array.

The root element will be at Arr[0].
Below table shows indexes of other nodes for the ith node, i.e., Arr[i]:
Arr[(i-1)/2]	Returns the parent node
Arr[(2*i)+1]	Returns the left child node
Arr[(2*i)+2]	Returns the right child node
The traversal method use to achieve Array representation is Level Order


Please refer Array Representation Of Binary Heap for details.



Applications of Heaps:
1) Heap Sort: Heap Sort uses Binary Heap to sort an array in O(nLogn) time.

2) Priority Queue: Priority queues can be efficiently implemented using Binary Heap because it supports insert(), delete() and extractmax(), decreaseKey() operations in O(logn) time. Binomoial Heap and Fibonacci Heap are variations of Binary Heap. These variations perform union also efficiently.

3) Graph Algorithms: The priority queues are especially used in Graph Algorithms like Dijkstra’s Shortest Path and Prim’s Minimum Spanning Tree.

4) Many problems can be efficiently solved using Heaps. See following for example.
a) K’th Largest Element in an array.
b) Sort an almost sorted array/
c) Merge K Sorted Arrays.

Operations on Min Heap:
1) getMini(): It returns the root element of Min Heap. Time Complexity of this operation is O(1).

2) extractMin(): Removes the minimum element from MinHeap. Time Complexity of this Operation is O(Logn) as this operation needs to maintain the heap property (by calling heapify()) after removing root.

3) decreaseKey(): Decreases value of key. The time complexity of this operation is O(Logn). If the decreases key value of a node is greater than the parent of the node, then we don’t need to do anything. Otherwise, we need to traverse up to fix the violated heap property.

4) insert(): Inserting a new key takes O(Logn) time. We add a new key at the "###### End of the tree #######". IF new key is greater than its parent, then we don’t need to do anything. Otherwise, we need to traverse up to fix the violated heap property.

5) delete(): Deleting a key also takes O(Logn) time. We replace the key to be deleted with minum infinite by calling decreaseKey(). After decreaseKey(), the minus infinite value must reach root, so we call extractMin() to remove the key.
We delete a  key at the "###### beginning of the tree #######".

registrationandturistcare.uk.gov.in

# Implement Max Heap with Hepify Method :- 

# Some important problems on Heap :- 
Lecture 75: Heaps in C++ || Interview Questions || Part - 1
https://www.youtube.com/watch?v=_9F2VgZcvdw
1. Find kth smallest and largest in array
    Steps :-
    1. make max heap for first k elements 
    2. if remaining "element" is less than Heap Top {
        // Agar bache hue "elements" me se aane wala current element agar Root Node se chota ho to 
        1. Heap Pop (Delete Top)
        2. Heap Push (element)
      }
2. Merge 2 max heap 
3. Check is Binary Tree is Heap
4. Minimum cost of Ropes 
5. Convert BST To Min Hip
6. Kth Largest Sum 

https://www.youtube.com/watch?v=eccAKrmffh8
Lecture 76: Heaps in C++ || Interview Questions || Part - 2
CodeHelp - by Babbar
19K views
4 months ago

1. Merge K Sorted Array
2. Merge k Sorted Link List 

https://www.youtube.com/watch?v=RrxpTWqj97A
Lecture 77: Heaps Hard Interview Questions || Part - 3

1. Smallest Range from K Sorted List , in which at least one element from each list .  
2. Find Median In Stream 

https://www.youtube.com/watch?v=-VhasEYfeT0
Heap | Data Structure and Algorithms | Interviews Question | Coding Tutorial | Hello World Prince


https://www.youtube.com/watch?v=3hvbRwnEfGg
Popular Coding Interview Question - Minimum Meeting Rooms (Sorting, Heaps)



### Need to implement custom Max/Min Heap why becuase in JS there is no any inbuilt libraray for Heap 

##### Try to build custom Array Implementation for Heap 
https://leetcode.com/discuss/general-discussion/545271/javascript-using-heappriorityqueue-during-coding-interview

https://stackoverflow.com/questions/64833672/javascript-and-priority-queues-in-coding-interviews

https://stackoverflow.com/questions/42919469/efficient-way-to-implement-priority-queue-in-javascript

https://www.digitalocean.com/community/tutorials/js-binary-heaps