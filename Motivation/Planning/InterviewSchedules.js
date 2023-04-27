
1. Kyndral : Tuesday 
1. Lended : Tuesday 
4. Agiliad 
2. GoGaurdian : 
3. PlanView : 
5. Altimetric latest
6. Samsung
7. Sony
8. Ajio 
9. jio
10. oursystem node architect
11. cloud9 : budget issue 
12. Paypal Payroll is different 
13. bayercraft : 
14. hexawaRE
15. NEXTHINK 
16. MICROCHIP
17. nayka bangalore , nayka gudgav 
18. interpricemid mern 
19. niit co forge 
20 . intuit payroll isdiff 
21 boing payroll is et 
22 zabango 
shield 
epam 

tradence 
wayfair 
condenass 
jonson and jonson
ey delhi


axis cades :- lead , node react aws postgress restapi 

https://tinyurl.com/26wyzz7w

//Write code here
    //sort the animal by energy levelin decreasing order 
    var sorted = _input_stdin_array.sort(a,b=>b-a)

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



