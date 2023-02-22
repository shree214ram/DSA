<script>
const A = [
  {
    name: "John",
    hobbies: [
      "singing",
      "walking",
      "playing guitar"
    ]
  },
  {
    name: "Terry",
    hobbies: [
      "swimming",
      "playing guitar"
    ]
  },
  {
    name: "Anna",
    hobbies: [
      "walking",
      "swimming",
      "playing guitar"
    ]
  },
  {
    name: "Paul",
    hobbies: [
      "swimming",
      "singing"
    ]
  },
  
];
//output should be 

/*
//{singing : ['John','Paul'], walking : ['John','Anna'] } ..etc
*/


/*

Map(4) {'singing' => Array(2), 'walking' => Array(2), 'playing guitar' => Array(3), 'swimming' => Array(3)}
[[Entries]]
0
: 
{"singing" => Array(2)}
key
: 
"singing"
value
: 
(2) ['John', 'Paul']
1
: 
{"walking" => Array(2)}
key
: 
"walking"
value
: 
(2) ['John', 'Anna']
2
: 
{"playing guitar" => Array(3)}
key
: 
"playing guitar"
value
: 
(3) ['John', 'Terry', 'Anna']
3
: 
{"swimming" => Array(3)}
key
: 
"swimming"
value
: 
(3) ['Terry', 'Anna', 'Paul']
size
: 
4
[[Prototype]]
: 
Map
*/

//Time O(n), Space O(n)
const hash = new Map()
for(let i=0;i<A.length;i++){
	A[i].hobbies.forEach(key =>{
      if(!hash.get(key)){
			hash.set(key,[A[i].name])
      }else{
      	const newArray = hash.get(key)
      	hash.set(key,[...newArray,A[i].name])
      }
    }
    )
}
console.log(hash,"hash")
</script>