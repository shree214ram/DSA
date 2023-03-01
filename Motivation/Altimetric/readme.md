1. multiple Argument curring 
2. check anagram two string 
<script>
    //4:53 //4:59 //5:07
const A= "Hello"
const B= "loHel"
const AMap = new Map() 
if(A.length==B.length){
    
for(let i=0;i<A.length;i++){
    if(AMap.get(A[i].charCodeAt(0))){
        AMap.set(A[i].charCodeAt(0),AMap.get(A[i].charCodeAt(0))+1)
    }else{
        AMap.set(A[i].charCodeAt(0),1)
    }
}

for(let i=0;i<B.length;i++){
    if(AMap.get(B[i].charCodeAt(0))){
        AMap.set(B[i].charCodeAt(0),AMap.get(B[i].charCodeAt(0))-1)
    }
}
let check = false
for(let key of AMap){
     if(AMap.get(key[0])!=0){
        check = true
    }
} 
if(check == true){
        console.log("Not Possible");
}else{
        console.log(" Possible");

}

}else{
        console.log(" Not Possible length arediff");

}
</script>