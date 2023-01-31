//output , [[[1, 2]], 3]
const str = '[[[1, 2]], 3]'
const N = str.length;
//7:8
let final =null ;
solve(str,final)
function solve(str,temp,index){
    //Base case
    if(index == N){
        return temp
    }
    for(leti=index;i<str.length;i++){

    let current = A[i]

    if(current == "["){
        temp = []
        return solve(str.substring(str.indexOf(i)+1),temp,index+1)
    }
    if(current == "{"){
         if(temp == null  ){ temp= {}}else {
            
         }
        return solve(str.substring(str.indexOf(i)+1),temp,index+1)
    }

}
}