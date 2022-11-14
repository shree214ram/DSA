https://www.youtube.com/watch?v=CY5gQBTQ6zA
Solving Tower Of Hanoi Problem With Recursion

https://www.geeksforgeeks.org/c-program-for-tower-of-hanoi/

Tower of Hanoi is a mathematical puzzle where we have three rods (A, B, and C) and N disks. Initially, all the disks are stacked in decreasing value of diameter i.e., the smallest disk is placed on the top and they are on rod A. The objective of the puzzle is to move the entire stack to another rod (here considered C), obeying the following simple rules: 

Only one disk can be moved at a time.
Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
No disk may be placed on top of a smaller disk.
Examples:

Input: 2
Output: Disk 1 moved from A to B
Disk 2 moved from A to C
Disk 1 moved from B to C

Input: 3
Output:

 Disk 1 moved from A to C
Disk 2 moved from A to B

Disk 1 moved from C to B
Disk 3 moved from A to C

Disk 1 moved from B to A
Disk 2 moved from B to C
Disk 1 moved from A to C

| | |

1 2 3     1 2     3


A   C  B

-   1
-       2
-       1
-   3
1
-   2
    1