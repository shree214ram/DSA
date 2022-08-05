<!-- https://www.geeksforgeeks.org/delete-nth-node-from-the-end-of-the-given-linked-list/ -->

<!-- https://www.youtube.com/watch?v=ITsn71FUaO0 -->

we will have to understand  below approach :- 

Approach :-

1. Take two pointers, first will point to the head of the linked list and second will point to the Nth node from the beginning.
2. Now keep increment both the pointers by one at the same time until second is pointing to the last node of the linked list.
3. After the operations from the previous step, first pointer should be pointing to the Nth node from the end by now. So, delete the node first pointer is pointing to.
    let first = this.head;
    let second = this.head;
  1. first for loop upto key for set first and second point (For example key = 2)

     for (let i = 0; i < key; i++) {
            if (second.next == null) {
                if (i == key - 1) {
                    this.head = first.next
                }
            }
            second = second.next;
        }

 First Second         First Second         First   Second
     ||                  |   |                |       |
     ||                  |   |                |       |
     ||                  |   |                |       |
     2-->3-->1-->7       2-->3-->1-->7        2-->3-->1-->7
    
    if(second.next == null){
        // if key -1 == current index means first element will remove in this case means , we had 4 element and we want to delete 4th(key = 4) element only . 
        if(i == key-1){
            this.head = first.next
        }
    }

   2. while(second.next !== null){
       first = first.next
       second = second.next
   }
   First   Second          First   Second
     |       |               |       |
     |       |               |       |
     |       |               |       |
     2-->3-->1-->7       2-->3-->1-->7