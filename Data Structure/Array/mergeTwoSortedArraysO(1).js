//Program for merge two arrays 
//https://www.geeksforgeeks.org/merge-two-sorted-arrays-o1-extra-space/

//Insertion Sort 
function marge(array1,array2){
  for(var i=array2.length-1 ; i>=0; i-- ){
    // console.log(array2[i])
    var last = array1[array1.length-1]
    for(var j=array1.length-2 ; j>=0 && array1[j] > array2[i]; j-- ){
      // console.log(array2[i])
      array1[j+1] = array1[j]
    }
    if(last > array2[i] || j != array1.length-2){
      array1[j+1] = array2[i]
      array2[i] = last;

    }
  }
}

var array1 =[1,3,5,7 ];
var array2 =[2,4,6,8 ];

marge(array1,array2);

console.log( "After Merging \nFirst Array: "); 
for ($i=0; $i<array1.length; $i++) {
    console.log( array1[$i] + " "); 

}
console.log( "\nSecond Array: "); 
for ($i=0; $i<array2.length; $i++) {
    console.log( array2[$i] +" "); 

}
// return 0; 