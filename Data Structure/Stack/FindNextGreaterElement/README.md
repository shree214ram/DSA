
### Find neartest greater on right side 
Steps :-
1. create stack push first element in stack
2. for(Arry){
    if(stack.length == 0){
        stack.add(A[i])
        continue;
    }
3. while loop (until stack not empty and pickTop of stack <= A[i]) {

        result.push(stack.pickTop())
        stack.removeTop()
4.      }
5.  }

6. while loop (until stack not empty ) {

        result.push(-1)
   }
