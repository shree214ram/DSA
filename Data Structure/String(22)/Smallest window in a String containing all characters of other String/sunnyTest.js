<!DOCTYPE html>
<html>
<body>

<h2>JavaScript const</h2>

<p id="demo"></p>

<script>
//10:23
//find the shortest substring who is having all character of pattern 
var str = "this is a test string";
var pat = "tist";


//1.
const patH = new Map();
const strH = new Map();
for(let i=0;i<pat.length;i++){
	//prepare hash map for pattern
	if(patH.has(pat[i].charCodeAt(0))){
    	patH.set(pat[i].charCodeAt(0),patH.get(pat[i].charCodeAt(0))+1)
    }else{
    	patH.set(pat[i].charCodeAt(0),1)
    }
}
console.log(patH,"patH");

//check length
for(let i=0;i<str.length;i++){
    
    //prepare first window of string Hash map
    if(strH.has(str[i].charCodeAt(0))){
    	strH.set(str[i].charCodeAt(0),strH.get(str[i].charCodeAt(0))+1)
    }else{
    	strH.set(str[i].charCodeAt(0),1)
    }

    //if length of current Element in str is less than get str 
    if(strH.get(str[i].charCodeAt(0)) <= patH.get(str[i].charCodeAt(0))){
        count++
    }

    //if count is equal to patern len
    if(count == pat.length){

        //*****************  Try to minimize the window *********************/
        //yadi string me start element ki count bada ho pattern ke start element ke count se 
        //YA pattern ke start element ka count 0 ho
        while(strH.get(str[start].charCodeAt(0)) > patH.get(str[start].charCodeAt(0)) ||
        patH.get(str[start].charCodeAt(0)) == 0
        ){
            if(strH.get(str[start].charCodeAt(0)) > patH.get(str[start].charCodeAt(0))){
                strH.set(str[i].charCodeAt(0),strH.get(str[i].charCodeAt(0)) - 1) //ek kam karte jao 
            }
        }
    }


}

console.log(strH,"strH");

//2. 

</script>
</body>
</html>
