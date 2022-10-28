// JavaScript program to find maximum number of meetings

// Function for finding maximum meeting in one room
function maxMeetings(s, f, n)
{
	//Make an Array : aCollectiveArray like [[index, startTime, endTime]]
	//index will be stored as i + 1, to start indices from 1.
	var aCollectiveArray = [];
	for(var i=0; i<s.length; i++){
		var aNew = [];
		aNew.push(i + 1);
		aNew.push(s[i]);
		aNew.push(f[i]);
		aCollectiveArray.push(aNew);
	}
	console.log(aCollectiveArray,"aCollectiveArray")
	//array sorted based on end Time
	aCollectiveArray.sort((a,b) => a[2] - b[2]);
	console.log(aCollectiveArray,"sorted aCollectiveArray")
	
	//endTime is at 2nd index of subarray inside aCollectiveArray
	var endTime = aCollectiveArray[0][2];
	
	//result will contain the indices of meetings
	var result = [];
	
	//first meeting will be bydefault push as array is already sorted
	result.push(aCollectiveArray[0][0]);
	
	//will compare if next startTime > prev endTime
	for(var k=1; k<aCollectiveArray.length; k++){
		var startTime = aCollectiveArray[k][1];
		if(startTime > endTime){
			result.push(aCollectiveArray[k][0]);
			endTime = aCollectiveArray[k][2]
		}
	}
	
	//If we need to return indices then will return : result
	//or else if we need to return number of meetings then will return result.length
	return result;
}

// Driver code


// Starting time
let s = [ 1, 3, 0, 5, 8, 5 ];

// Finish time
let f = [ 2, 4, 6, 7, 9, 9 ];

// Number of meetings.
let n = s.length;

// Function call
maxMeetings(s, f, n);

//This code is contributed by Ankit Kumar.
