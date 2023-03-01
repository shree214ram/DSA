## custom map function
<script>
console.log("hay")
const myArray = [1,2,3]
Array.prototype.myMap=function(callBack){
    console.log(this,"this")
    let result = []
    for(let i=0;i<this.length;i++){

        result.push(callBack(this[i]))

    }
    return result
}

const result = myArray.myMap(obj=>{
    return obj*2
})
console.log(result,"Result")

const array1 = [1, 4, 9, 16];
const map1 = array1.myMap(x => x * 2);
console.log(map1);
</script>

## What is node js 

## Express Js , why we should use ? What is the important part 

## Auth2 what it is ?? Go Deep dive to JWT Token and Auth 

## Is there any way to communicate 2 different server apart from rest api Or Get /Post 

## how can we protect our application from sql injections ? If any form has discription textarea 

## What is Redis and how its works ?

## what is difference between Authorization and Authointication 

## Status of api response 

## Standered of api implemantation 

## Open Id ??

## 


