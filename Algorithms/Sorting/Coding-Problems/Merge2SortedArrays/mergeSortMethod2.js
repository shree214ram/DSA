//Program for merge two arrays 

//Merge Sort 
var array3=[];
function marge(array1,array2){
  var i=0,j=0,k=0;
  while(i<array1.length && j < array2.length){
      if(array1[i] < array2[j]){
        array3[k++] = array1[i++]
      }else{
        array3[k++] = array2[j++]
      }
  }

  // remaining 
  while(i< array1.length){
        array3[k++] = array1[i++]
  }
  // remaining 
  while(j< array2.length){
        array3[k++] = array2[j++]
  }
}

var array1 =[1, 3, 5, 7 ];
var array2 =[2, 4, 6, 8 ];

marge(array1,array2);

console.log( "After Merging \Final Array: "); 
for (i=0; i<array3.length; i++) {
    console.log( array3[i] + " "); 

}

// return 0; 