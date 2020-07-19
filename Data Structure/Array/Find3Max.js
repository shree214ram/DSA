function find3Max(myArray){
  let first = second = third = null;
  for (let i=0 ; i< myArray.length ; i++){
    // console.log(myArray[i]);
    let current = myArray[i]
    if(current >  first){
      console.log('hay')
      third = second ;
      second = first ;
      first  = current ;
    } 
    else if(current >  second && first != current ){
      console.log('jay')

      third = second ;
      second = current ;
    }
    else if(current >  third && second != current) {
      console.log('pag')

      third = current ;
    }
  }
  console.log(first)
  console.log(second)
  console.log(third)
}

const myArray = [2, 7, 5, 9]
find3Max(myArray);