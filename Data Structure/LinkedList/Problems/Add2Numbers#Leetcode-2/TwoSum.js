
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
