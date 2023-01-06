const { group } = require("console");

const test_cases = [
    // [ input_str, output ]
    [ '[]', [] ],
    [ '{}', {} ],
    [ '[0]', [0] ],
    [ '[1, "2", {}, [],"[]"]', [1, "2", {}, [], "[]"] ],
    [ '{"k": "v"}', {"k": "v"} ],
    [ '[[[1, 2]], 3]', [[[1, 2]], 3] ]
  ]
  
  // for test in test_cases:
  //   exp_output = test[1]
  //   test_input = test[0]
  //   out = convertInputToJson(test_input)
  //   assert out == exp_output 
  
  function convertStringToJson (inputKey, inputValue){
    let output = inputKey
    if(typeof inputKey == "string"){
      output = parseInt(inputKey)
    }
    return output;
  }
  //ittrate the values 
   
  // input = '[ [[1, 2]] , 3]' = [[[1, 2]], 3]
  
  //""
  function convertInputToJson(input){
    let convertedStringToJson = input[0]
    console.log(input[0]);
    console.log(convertedStringToJson,"convertedStringToJson")
      let output  ;
      //if its array 
    if(typeof convertedStringToJson == "object" || typeof convertedStringToJson == "array"){
      for(let key in convertedStringToJson){
        output[key] =( typeof convertedStringToJson[key] == "object" || typeof convertedStringToJson[key] == "array") ? convertInputToJson(convertedStringToJson[key]) : convertedStringToJson[key]
        
      }
    }
    //if its simple string value 
    else {
  
    }
  
   return output;
  }
  
  //for(let i=0;i<input.length;i++){
    //
  // input: '[]'
  // output: []
  // input: '[1, "2", {}, []]'
  // output: [1, "2", {}, []]
  
  
  const output = convertInputToJson('[1, "2", {}, []]')
  console.log(output,"output")