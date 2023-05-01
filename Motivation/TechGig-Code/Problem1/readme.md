<script>
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
    const x = _input_stdin_array[0].split(" ")[1] 
    //sort the animal by energy levelin decreasing order 
    var sorted = _input_stdin_array[1].split(" ").sort((a,b)=>b-a)

    //find the minimum energy level p such that axactly x animal can be saved 
    let count = 0 ;
    for(let i=0;i<sorted.length;i++){
        if(sorted[i] >= sorted[x-1]){
            count++;
        }else{
            break;
        }
    } 

    if(count == x){
        console.log(sorted[x-1])
    }else{
        console.log("-1")
    }


});
</script>