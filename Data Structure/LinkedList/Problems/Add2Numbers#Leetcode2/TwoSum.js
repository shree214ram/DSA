//https://www.youtube.com/watch?v=_ktNBF1wiBY
        3     4      3
    +
        4     6      4
--------------------------------
    =
        7     0       8
        Addition --------------------->

Note :- Actually in maths we start to addition from right to left not left to right . 
But in this problem list are in reversed order so we can use Single link list and Add in Reverse order (Left to right)
Steps:- 
1. Assume L1 and L2 are linked List already implemented .
2. We will make a new Linked List 
3. we will ittrate loop untill L1 Or L2 Or carry value is null
3. in loop we will create a fresh sum and in which we will Add L1[currentData] and  L2[currentData] one by one in fresh sum 
4. Assign that's Mod value to next of result and Assign carry value to CarryValue variable 
            10  
        1       0
        carry   mod  


function AddTwoNumbers(N1,N2){

  var NewList = new LinkedList();
  NewList.add(0)
  while(N1!==null || N2!== null || carryValue !== null){
 let sum =0
 if(N1!==null){
        sum+=N1.data
        N1=N1.next
      }
      if(N2!==null){
        sum+=N2.data
        N2=N2.next
    }
    sum += carryValue
    carryValue = sum/10

    NewList.next = new Node(sum%10)
    result = NewList.next
  }

}

const N1 = N1.head
const N2 = N2.head

const NewList = 
AddTwoNumbers(N1,N2)
