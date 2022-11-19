//const A =  [3,2,1,0,4]
//output false

//const A =  [2,1,1,0,4]
//output false

//const A =  [2,3,1,1,4]
//output true

const A =  [1,1,2,5,2,1,0,0,1,3]
//output true
/*
[3,             2,          1,     0,           4]
 0+3 = 3        1+2 =3      2+1=3  3+0 =3       4{i,currentIndex} > 3{maxreachable}          
*/
let maxReachable = 0 
for(let i=0;i<A.length;i++){

    if(i>maxReachable){
        console.log("Not Possible");
        break;
    }
    if(A.length-1==maxReachable){
        console.log("Possible");
         break;
       // return true
    }
    maxReachable= Math.max(maxReachable,A[i]+i)
}