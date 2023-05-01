//9:17
const str = "abcda"
let max = Number.MIN_VALUE
let temp = ""
for(let i=0;i<str.length;i++){
    //exist
    if(temp.indexOf(str[i]) != -1){
        while(temp.substring(0,1) != str[i]){
            temp=temp.substring(1)
        }
    }else{
        temp+=str[i]
    }
    max= Math.max(max,temp.length)
}
console.log("Max= ",max)