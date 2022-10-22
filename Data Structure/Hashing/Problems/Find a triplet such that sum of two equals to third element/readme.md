//Find a triplet such that sum of two equals to third element

#### Broute Force (3 loops o(n3)/o(1))

#### 2 Loop and Hash Method  (o(n2)/o(n)) 
###### Note :- this method for print first matched only 
const Arr = [1,2,3,4,5,6] // output 3
const hash = new Map();
for(let i=0;i<Arr.length;i++){
	for(let j=i+1;j<Arr.length;j++){
        /*if Arr[j]-Arr[i] present means that will be the first candidate of triplet & 
        Arr[i] is second and Arr[j] will be third candidate 
        */
    	if(hash.get(Arr[j]-Arr[i]) && (Arr[j]-Arr[i]) !== Arr[i]){
        	console.log(Arr[j]-Arr[i],",",Arr[i],",",Arr[j]);
            return false ;
        }
        hash.set(Arr[j]-Arr[i],1)
    }
}

#### Two Pointer (2 loops o(n2)/o(1))
###### Note :- this method for print all matched  
https://www.geeksforgeeks.org/find-triplet-sum-two-equals-third-element/

const Arr = [6,1,2,3,4,5].sort((a,b)=>a-b) 

1. Sort array 
2. for loop i  will be fixed point 
3. left l = i+1 , right r= Arr.length-1 
3. while loop until left < right 
    1. A[i]+A[l] == A[r]{ print these 3 elements }
    1. A[i]+A[l] < A[r]{ r-- }
    1. A[i]+A[l] > A[r]{ l-- }





