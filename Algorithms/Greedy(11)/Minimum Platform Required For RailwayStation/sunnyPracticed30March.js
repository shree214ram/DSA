<!DOCTYPE html>
<html>
<body>

<h2>JavaScript const</h2>

<p id="demo"></p>

<script>
//minimum platform 7;6 , 7:15
const GivenArray = [[900, 910],[940, 1200],[950, 1120],[1100, 1130],[1500, 1900],[1800, 2000]]

//sort via arrival time 
GivenArray.sort((a,b)=>a[0]-b[0])

//min Heap
const mh = []

mh.push(GivenArray[0])

for(let i=1;i<GivenArray.length;i++){
	const top = mh[0]
    console.log(GivenArray[i][0],"GivenArray[i][0]");
    console.log(top[1],"top[1]")
	if(GivenArray[i][0]>=top[1]){
    	console.log("chota")
    	mh.sort((a,b)=>a[0]-b[0])
    	mh.shift()
        
    }
        	mh.push(GivenArray[i])

}
console.log(mh)
</script>

</body>
</html>
