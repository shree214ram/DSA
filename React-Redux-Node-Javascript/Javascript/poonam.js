const A = ["sunny", "kamini", "poonam", "sunny", "kamini", "poonam", "sunny", "mayra", "kamini"]

/*
Sunny : 3X
poonam: 2x
kamini: 3x
mayra : 1x
*/
const obj = {}
//ittrate each value once
for (let i = 0; i < A.length; i++) {//1
    //compare  each ittrate value from remaining 
    if (!obj[A[i]]) {//3
        let count = 1;
        for (let j = i + 1; j < A.length; j++) {//2
            //jab vo object me exist na karta 

            //if(!obj[A[i]]){//3
            console.log("hay")
            //if match milta ho to counter increement 
            if (A[i] === A[j]) {//4
                count++;
                console.log(count, "after", A[i])
            }//4

            //}//3
            //
        }//2
        obj[A[i]] = count
    }//3
}//1
console.log(obj)
