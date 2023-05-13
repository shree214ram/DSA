//6:00 //6:12
function compare(sHash,pHash){
    for(let key of pHash.keys()){
        if(sHash.get(key) !== pHash.get(key)){
            return false
        }
    }
    return true
}
let txt = "BACDBGABCDA";
let pat = "ABCDB";
let count = 0
const pHash = new Map();
const sHash = new Map();
//o to m
for(let i=0;i<pat.length;i++){
	if(pHash.get(pat[i].charCodeAt(0))){
    	pHash.set(pat[i].charCodeAt(0), pHash.get(pat[i].charCodeAt(0))+1)
    }else{
    	    	pHash.set(pat[i].charCodeAt(0),1)
    }
    
    if(sHash.get(txt[i].charCodeAt(0))){
    	sHash.set(txt[i].charCodeAt(0), sHash.get(txt[i].charCodeAt(0))+1)
    }else{
    	    	sHash.set(txt[i].charCodeAt(0),1)
    }
}
if(compare(sHash,pHash)){
	count++
}


const m = pat.length;
for(let i=m;i<txt.length;i++){
	//Add new Element
    if(sHash.get(txt[i].charCodeAt(0))){
    	sHash.set(txt[i].charCodeAt(0), sHash.get(txt[i].charCodeAt(0))+1)
    }else{
    	sHash.set(txt[i].charCodeAt(0),1)
    }
    

    // Remove top from queue 
    sHash.set(txt[i-m].charCodeAt(0), sHash.get(txt[i-m].charCodeAt(0))-1)
   
    if(sHash.get(txt[i-m].charCodeAt(0)) ==0){
    	sHash.delete(txt[i-m].charCodeAt(0))
    }
    if(compare(sHash,pHash)){
		count++
	}
}
console.log("Total Count =", count)