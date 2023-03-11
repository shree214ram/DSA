//1:46

const str = "Banana,Orange,Mango,kiwi"
//console.log(str.slice(7,13))//orange
//console.log(str.substring(7,13))//orange
//console.log(str.substring(-4))
//kiwi
//console.log(str.slice(0,str.length-4))

//Mango,kiwi
//console.log(str.substr(-10))
// console.log(str.substr(-4))//Banana
console.log(str.slice(-18, -5))//Mango

//substring - ko nahi samjega 

//print abcd in small 

for(let i=0;i<26;i++){
	console.log(String.fromCharCode(97+i))
}

//print abcd in caps 

for(let i=1;i<26;i++){
	console.log(String.fromCharCode(64+i))
}

console.log("sunny".charCodeAt(4)) 

//65 A , 90 Z  97 a , 121 z
