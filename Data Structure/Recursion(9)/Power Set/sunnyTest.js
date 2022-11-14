const str ="abc"
solve(str,"",0)
function solve(str,temp,index){
console.log(str,"str")
console.log(index,"index")
console.log(temp,"temp")
	//base case 
    if(str.length == index){
    console.log(temp,"---->")
    	return 
    }
    //recursion use for next 
    const res = solve(str,temp+str[index],index+1) + solve(str,temp,index+1)
    //calculation Include + Exclude 
}
