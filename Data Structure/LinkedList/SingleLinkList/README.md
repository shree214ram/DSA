#Single Link List 
//https://www.youtube.com/watch?v=dmb1i4oN5oE

## Definition :- 
   Basically Link List  is a lenear Data structure and Dynamic Memory Allocation 

   There are some restriction in Array like This is a fixed size A[6]  and type of collection of data , 
   If we want to add an element then we have to request to processor and in can't be extended . But Below step can doable 
   1. processor will Assign a New Fresh Memory Space of bytes A[7] 
   2. copy all the old memory item to New Memory

   ###### But that is a lot of effort and memory wastage process . 

   ### Memory Manager will takes 4 bytes for each elements so 6 * 4 = 24 Bytes Total memory space contigious and consigative  location 
```
               ------------------------------------  
               | 4   | 8   | 0   | 7   | 5   | 1   |
               |     |     |     |     |     |     |       
               ------------------------------------        
                100   101    102    103  104   105

                   Memory Allocation Graph Image 


```
   ###### We can use Link List there is no limit of Array size and we can easily add an element 

   ### Memory Manager will takes 8 bytes (4 for Value another 4 for Address on next(0 if it's last)) for each elements so 8 * 4 = 32 Bytes Total memory space Noncontigious and non-consigative  location 
```
               ----------------------------------------------------------------------------   
               | 4 |    |     |     |  8  |     |     |    | 0   |   |  7   | 5 |   | 1   |
               |   |    |     |     |     |     |     |    |     |   |      |   |   |     |       
               ----------------------------------------------------------------------------         
                100 101   102    103  104   105   106   107  108   109  110  111  112  113

                                    Memory Allocation Graph Image 

------------------     
| 4    | 100      |
| Data | Next     |
|      | Element  |
|      | Address  |
------------------  
(First Value stored with 4 byte which is of Integer and Second section is Pointer (Address of next element) , Total combination is called Node )



Root(Head) which is note a Node its Only a Pointer which keeps address of first element of LinkList .
----------     
|   100  |
|        |
---------- 
   |
   |
   |           ----------     ---------------      -----------          --------------    -------------      ---------------   
   |           | 4 | 104 |     |  8  |  108 |     |   0 | 110 |         |  7   | 111 |    |   5  | 113 |      |   1   | null|   
    ------->   |   |     |     |     |      |     |     |     |         |      |     |    |      |     |      |       |     |
               ----------     ---------------      -----------          --------------    -------------      ---------------  
                  100               104                  108                  110               111                  113
                                 
                                                   Link List Representation Image 
```

Rules :-
   1. We can not access any element directly as like Array becuase in link list our data not added in contigious or consigitive order .
   2. we may have to traverse for that if that is not first or last elemnt that's why searching may take O(n)
   3. Insertion and Deletion is easy it may take O(1) only 
Operation :-
 1. Insertion(Enqueue) :- Anywhere we can insert 
 ```
    I want to add 9        --------------   
                           | 9   | 103  |
                           --------------
   in below list 
   -----------------  
      2     4      6      
   -----------------  
   100     101    102


    1) first i would have to Create a new Node 
    
   --------------   
   | 9   | 103  |
   --------------
    2) then i will change next address of 6 from null to address of new element 9 to 103 and Next address of 9 to null because its last elemnt 

----------     
|   100  |
|        |
---------- 
   |
   |
   |           ----------     ---------------      ------------    
   |           | 2 | 101 |     |  4  |  102 |     |   6 | null |    
    ------->   |   |     |     |     |      |     |     |      |  
               ----------     ---------------      -------------  
                  100               101                  102     


----------     
|   100  |
|        |
---------- 
   |
   |           ----------     ---------------      ------------         --------------    
   |           | 2 | 101 |     |  4  |  102 |     |   6 | 103 |         |  9   | null |   
    ------->   |   |     |     |     |      |     |     |     |         |      |      |  
               ----------     ---------------      -------------        --------------   
                  100               101                  102                 103            
```
 2. Deletion(Dequeue) :- Always from Front 
   I want to remove 2 so 
    1) first i would have to increment Front++ that will be 1st from 0th Index and 
    2) then Queue[First] = 4 And Queue[LastFirst] = 2 will be Garbage but this place will still remains there with empty value . That is one drawback of Queue . With The Help Of Circuler Queue we can resolve that drawbacks and use that space again . 

               -----------------  
                 2     4      6       -----Rear
               -----------------     |
               0th    1st    2nd <---|
                 |
                 |
     Front-------
3. Front / Pick () :- Queue[Front]
4. isFull() :- if(rear == n) (Length of Queue)
4. isEmpty():- if(front == -1 && rear== -1) 
5. Display():- Display Elemts of queue 

Features 



Application :-

               -----------------  
               |     Printer    |
               |                |          
               -----------------   

      1     2      3     4      5    6

      One printer in a company but 6 system are sending request for print document together Printer sysytem has written program which will create a Queue which is comming First in Queue that will Printout First 


https://www.youtube.com/watch?v=YqrFeU90Coo

Queue using Array (Static Memory Location)


class QueueClass {

   constructor(){
      this.n= 5
      this.queue = []
      this.front = -1
      this.rear = -1
      let front = rear = -1
   }

   function enqueue(val){
      //if queue is empty
      if(this.rear == this.n-1){
         console.log("OverFlow)
      } else if(this.front == -1 && this.rear == -1){
         this.front += 1
         this.rear += 1
         this.queue[this.rear] = val
      } else {
         this.rear += 1
         this.queue[this.rear] = val
      }
   }

   function dequeue(val){
      if(this.front == -1 && this.rear == -1){
         console.log("UnderFlow)
      }else if(this.front == this.rear){
         this.front = this.rear  = -1
      }else{
         console.log("Dequeued Element is=> ",this.queue[this.front])
         this.front += 1
      }
   }

   function pick(){
      if(this.front == -1 && this.rear == -1){
         console.log("UnderFlow)
      }else{
         console.log(this.queue[this.front])
      }
   }

   function display(val){
      if(this.front == -1 && this.rear == -1){
         console.log("UnderFlow)
      }else{
         for(let i = this.front; i<this.rear+1; i++ ){
            console.log(this.queue[i])
         }
      }
   }
}
