https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/

https://www.youtube.com/watch?v=cNLHESv_XPc :-

take some variable 
A = [6,-3,-10,0,2]
min = A[0]
max = A[0]
result = A[0]

for(i=1){
    //jab bhi 0 ayega humko set karna he 1 to min and max 
    if(A[i]==0){
        min=max=1
        continiue;
    }else {
        let currentMin = min*A[i]
        let currentMax = max*A[i]
        min=Math.min(currentMin,currentMax)
        min=Math.min(min,A[i])//Ho sakta he ki currunt value khud bhi sabse choti ho sakti he 
        max=Math.max(currentMin,currentMax)
        max=Math.min(max,A[i])
        result = max
    }
}