// 1. Infinite Currying
function add(a){
	return function(b){
    	if(b){
        	return add(a+b)
        }
        return a;
    }
}
const res = add(1)(2)(3)(9)(11)(100)();
console.log(res,"res")

// 2. Infinite Currying with Infinite arguments 
function add(...argA){
	let a = argA.reduce((a,b)=>a+b,0)
	return function(...argB){
    	let b = argB.reduce((a,b)=>a+b,0)
    	if(b){
        	return add(a+b)
        }
        return a;
    }
}
const res = add(1,2,3)(2,3,9)();
console.log(res,"res")