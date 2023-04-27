(20 points) Give an algorithm that takes as input a positive integer n
and a number x, and computes x
n
(i.e., x raised to the power n) by
performing O(lg n) multiplications. Your algorithm CANNOT use
the exponentiation operation, and may use only the basic arithmetic
operations (addition, subtraction, multiplication, division, modulo).
Moreover, the total number of basic arithmetic operations used should
be O(lg n).


### Solution1. Simple for loop O(n):- 
1. ittrate for loop n times and multiply same x into previous result 
2. 
let res = 1;
for(let i=0;i<n;i++){
    res*=x
}

for example we have to calculate 2 to the power 5 so 2*2*2*2*2 

### Solution2. recursion O(n)/O(1):- 
1. call the same function upto n-1 times 
2. pow(x,n){

    return x*pow(x,n-1)

}

it will take O(n)

### Solution3. O(nlogn)/O(n):- 
We can use Devide and conqueror techniques to solve this problem 

1. make a function power , pow().
2. devide problem into 2 parts as DevideAndConqueror technique 
3. Recursively use DevideAndConqueror with same function pow until we would not have a single element . 
4. base case : 
    1. if x = 0 return 0 
    1. if n = 0 return 1 
4. If n is even 
    pow(x,n) = pow(x,n/2)* pow(x,n/2)
5. if n is odd 
    pow(x,n) = x* pow(x,n/2)* pow(x,n/2)

### Solution4. O(nlogn) optimised version :-

we can store the pow(x,n/2) in a variable and we can reuse . Because its taking unnecessory time compaxity 
