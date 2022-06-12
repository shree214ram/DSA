//Single Link List //https://www.youtube.com/watch?v=dmb1i4oN5oE

Definition :- 
   Basically Link List  is a lenear Data structure and Dynamic Memory Allocation 

   There are some restriction in Array like This is a fixed size A[5] and type of collection of data , 
   If we want to add an elemet then we have to request to processor and in can't be extended . But Below step can doable 
   1. processor will Assign a New Fresh Memory Space of bytes A[6] 
   2. copy all the old memory item to New Memory

   But that is a lot of effort and memory wastage process . 

               ------------------------------------  
               | 4   | 8   | 0   | 7   | 5   | 1   |
               |     |     |     |     |     |     |       
               ------------------------------------        
                100   101    102    103  104   105

                   Memory Allocation Graph Image 


                  --Ram---
                  --shyam---
                  --puja---
                  --rani---
                  --Manoj---

   Ram Came in first in Queue so it will take a ticket from counter first and out first that is FIFO.
   Manoj Came last in Queue so he will go Last in the queue (LILO) List In Last Out

Rules :-
   Insertion from one end and Deletion from another end . 
   But in Stack Insertion and Deletion always from same end That's why that is called LIFO 
   like a DVD Stand first DVD which entered first will go out in last (FILO)
   
   |     DVD5      |  |            Delete(Pop)
   |     DVD4      |  |              |
   |     DVD3      |  |              |
   |     DVD2      |  |              |
   |     DVD1      |Insert(Push)     |
   -----------------
Operation :-
 1. Insertion(Enqueue) :- Always from Rear 
    I want to add 9 so 
    1) first i would have to increment Rear++ that will be 3rd Index and 
    2) then Queue[Rear] = 9

               -----------------  
                 2     4      6       -----Rear
               -----------------     |
               0th    1st    2nd <---|
                 |
                 |
     Front-------
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
