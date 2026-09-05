//const A =  [3,2,1,0,4]
//output false
/*
[3,             2,          1,     0,           4]
 0+3 = 3        1+2 =3      2+1=3  3+0 =3       4 {i,currentIndex} > 3{maxreachable} Not possible          
*/
//const A =  [2,1,1,0,4]
//output false

//const A =  [2,3,1,1,4]
//output true

const A =  [1,1,2,5,2,1,0,0,1,3]
//output true
/*
Indexs --->
[1,         1,          2,     5,       2,       1,      0,      0,      1,       4]
 0+1 = 1    1+1 =2      2+2=4  3+5 =8   4+2 =6   5+1 =6  6+0 =6  7+0 =7  8+1 =9   9 {i,currentIndex} = 9{maxreachable} possible          
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