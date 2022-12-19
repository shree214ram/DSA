
//Question 1:- true if s1 and s2 are anagrams otherwise false
function validAnagram(s1, s2) {
  if(s1.length!==s2.length){
    return false;
  }
  //inserting all the element of first string
  const hash = new Map();
  for(let i=0;i<s1.length;i++){
    //already enot exist
    if(!hash.get(s1[i])){
      hash.set(s1[i],1);
    } else{
      hash.set(s1[i],hash.get(s1[i])+1);
    }
  }

  //checking second string elements in hash

  for(let i=0;i<s2.length;i++){
    if(!hash.get(s2[i])){
      return false;
    }
  }
  //return true in last if all the character found in s2 
  return true;
}

// ABCD
// DCBA
// DCAB

const s1 = "listen", s2 = "silent";
console.log(' Two strings are anagram ', validAnagram(s1, s2));

/*
1. 2 for loop (N*N) ,O(0)
2. sort both the (2logN) ,O(0)
  - s1.sort();
  - s2.sort();
  for(i=0; i=n) {
    if(s1[i] != s2[i]) {
      retun false;
    }
  }
3. Hash Map   O(N) , O(N)

[1,8,9,45]
Set :- {1:1,8:8}

[1,8,9,45,1]

Map 
{1:2,8:1,45:1}
*/

const tempSet = new Set();
tempSet.add(1);
tempSet.add(2);
tempSet.add(1);
console.log(tempSet);


const tempMap = new Map();
tempMap.set(1, 1);
tempMap.set(2, 2);
tempMap.set(1, 2);
console.log(tempMap);


//Question 2:- Explain System Design of any web service ? Load Balancing , Kubernative , Kafka , CAP Theoram 
