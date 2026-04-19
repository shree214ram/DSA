function isAnagram(s1, s2){
   if(s1.length !== s2.length)
    return false;
   const objS1 = {};
   for(ch of s1){
    objS1[ch] = (objS1[ch] || 0) + 1;
   }
   for(ch of s2){
    if(!objS1[ch]){
        return false;
    }
    objS1[ch]--;
   }
   return true
}
