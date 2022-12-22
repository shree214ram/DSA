//#### custom map reduce and filter:-
	//1:44
    
    Array.prototype.customMap= function(callback){
    	const res = [];
        for(let i=0;i<this.length;i++){
            res.push(callback(this[i],i,this))
        }
        return res;
    }
    const A = [1,2,3]
    const res= A.customMap((obj,index,A)=>obj*2)
    console.log("result=>", res)
    
    //A.sort((a,b)=>b-a)

    //https://dev.to/dhilipkmr/implementing-our-own-array-map-method-in-javascript-553m
    // https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc

    //https://www.robinwieruch.de/javascript-map-array/
    