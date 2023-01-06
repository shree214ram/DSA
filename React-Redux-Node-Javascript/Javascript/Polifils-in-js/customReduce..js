Array.prototype.myCustom=function(callback){
	let result = 1;
    for(let i=0;i<this.length;i++){
    	result*=callback(this[i],i,this)
    }
    return result;
}
const A = [1,2,3]
const result = A.myCustom((customObj,index,Array)=>{
	return customObj
})
console.log("Result=",result)
