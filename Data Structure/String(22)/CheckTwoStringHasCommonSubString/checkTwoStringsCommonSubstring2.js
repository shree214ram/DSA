//shreeGaneshaynamah
// Program to print Yes/No if two array has common sub string 
function check(s1, s2) {
  const k = 97;
  const charArray = {};
  for (let i = 0; i < 26; i++) {
    const currentObject = String.fromCharCode(k + i);
    charArray[currentObject] = false;
  }
  for (let i = 0; i < s1.length; i++) {
    charArray[s1.charAt(i)] = true;
  }
  // console.log(charArray)
  for (let i = 0; i < s2.length; i++) {
    if (charArray[s2.charAt(i)]) {
      return true;
    }
  }
  return false;
}

const testArray1 = ['Hello','ab', 'mn', 'pq'];
const testArray2 = ['Worlds', 'de', 'no', 'p'];
for(let i=0; i< testArray1.length; i++){
  const str1 = testArray1[i];
  const str2 = testArray2[i];

  if (check(str1, str2)) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

