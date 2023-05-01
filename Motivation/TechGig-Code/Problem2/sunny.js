// Read input from STDIN. Print your output to STDOUT.

process.stdin.resume();
process.stdin.setEncoding('utf-8');

var _input_stdin = "";
var _input_stdin_array = "";
var _input_currentline = 0;

process.stdin.on('data', function (data) {
    _input_stdin += data;
});


process.stdin.on('end', function () {
    _input_stdin_array = _input_stdin.split("\n");
	
    //Write code here
    let lengthElements = _input_stdin_array[0];
    let arrayElements = _input_stdin_array[1];
    let queryElements = _input_stdin_array[2];

    let inputArray = arrayElements.split(" ");
    let queryArray = queryElements.split(" ");
    let result = []
    for(let i=0;i<queryArray.length;i++){
        let currentElementEffort = 0
        for(let j=0;j<inputArray.length;j++){
            if(queryArray[i] !== inputArray[j]){
                currentElementEffort+= Math.abs(queryArray[i]- inputArray[j])
            }
        }
        result.push(currentElementEffort)
    }
    let finalRes = result.join(" ")
    console.log(finalRes);
    // for(let j=0;j<result.length;j++){
    //         console.log(result[j])
    //     }
     inputArray = null;
     queryArray = null;
     result = null;
     lengthElements = null;
     arrayElements = null;
     queryElements = null;
     //finalRes = null;
    return 0;
});

