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
    const givenValues = _input_stdin_array[1].split(" ");
    const hash = new Map()
    let counter = 0
    const keysArray = []
    for(let i=0;i<givenValues.length;i++){
        if(!hash.get(givenValues[i])){
            hash.set(givenValues[i],counter+1);
            keysArray.push(givenValues[i])
            counter++
        }
    }
    const needTobeAddedValues = _input_stdin_array[2].split(" ").sort((a,b)=>b-a);
    for(let i=0;i<needTobeAddedValues.length;i++){
        if(!hash.get(needTobeAddedValues[i])){
            let size = 0;
            for(let key of hash.keys()){
                //If current value of need to be add is greater than or equal to existing key   
                if(parseInt(needTobeAddedValues[i])  >= parseInt(key)){
                    hash.set(needTobeAddedValues[i],hash.get(key));
                    keysArray.push(needTobeAddedValues[i])
                    //increase one counter inremainig from this key 
                    for(let inckey of hash.keys()){
                        if(parseInt(inckey)<=parseInt(key)){
                            hash.set(inckey,hash.get(inckey));
                        }
                    }
                }
                else if(size+2 > hash.size){
                    hash.set(needTobeAddedValues[i],hash.get(keysArray.sort((a,b)=>a-b)[0])+1)
                }
                size++
            }
        }
    }
    for(let i=0;i<needTobeAddedValues.sort((a,b)=>a-b).length;i++){

    console.log(hash.get(needTobeAddedValues[i]))
    }

});

//Map { '120' => 1, '100' => 2, '90' => 3, '60' => 6, '80' => 4 }